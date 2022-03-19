<?php
$access_password = "123456";
$wrong_pwd = (!empty($_POST["password"]) &&
    $_POST["password"] != $access_password);
if (!empty($_POST["password"]) && !$wrong_pwd) {
    phpinfo();
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>Password required!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
        a, button {
            cursor: pointer;
        }
        *[disabled] {
            cursor: not-allowed !important;
        }

        a {
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        a[href] {
            color: blue;
        }

        .recommended {
            background:rgba(12, 218, 173, 0.3);
        }

        form label {
            cursor: pointer;
        }

        .mydialog {
            position: fixed;
            left: 0;
            top: 0;
            z-index: 10;
            background: white;
            border: 1px solid #cccccc;
            padding: 5px 5px;
        }
        .mydialog dialog-title {
            font-weight: bold;
            padding: 10px 10px;
            background: #e9e9e9;
            border: 1px solid #dddddd;
            display: block;
            cursor: default;
            user-select: none;
            -webkit-user-select: none;
        }
        .mydialog dialog-title .btn {
            cursor: pointer;
        }
        .mydialog dialog-title .btn.close {
            font-family: 'Consolas', serif, sans-serif;
            position: absolute;
            right: 0;
            transform: translate(-100%, 0);
        }

        #pwd_form {
            border: 1px solid gray;
            padding: 10px 10px;
        }
        .PASSWORD_ERROR_PROMPT {
            margin-top: 8px;
            padding: 4px 4px;
            background: rgba(220, 32, 32, 0.9);
            color: #ffffff;
        }
    </style>
</head>

<body>

    <main>
        <div id="main_div_dialog" class="mydialog" hidden>
            <dialog-title>phpinfo.php
                <button class="btn close" title="Close" disabled>x</button>
            </dialog-title>
            <h1>Password required!</h1>
            <h3>You must <a href="##" id="input_pwd_btn_1">input password</a>
            to access php and native information.</h3>
            <br />
            <form id="pwd_form" action="" method="post">
                <div><label style="display:flex">
                    Password:&nbsp;&nbsp;<input style="flex:1"
                     type="password" name="password"
                     id="pwd" required autofocus />
                     <label>&nbsp;<button type="button" id="show_pswd">
                         Show Password</button></label>
                </label></div>
                <?php
                if ($wrong_pwd) {
                        echo '<div class="PASSWORD_ERROR_PROMPT">'.
                            'Password is incorrect. Please <a '.
                            'href="javascript:void pwd.focus()" '.
                            'style="color: white;">retry</a>.'.
                            '</div>';
                }
                ?>

                <br />
                <div style="display: flex; text-align: center;">
                    <button type="submit" flex="1"
                        class="btn recommended"
                        style="font-size: larger;flex: 1;">
                        Submit
                    </button>&nbsp;&nbsp;&nbsp;
                    <button type="reset" flex="1" disabled
                        class="btn" style="font-size: larger;">
                        Reset
                    </button>&nbsp;&nbsp;&nbsp;
                    <button type="button" flex="1" disabled
                        style="font-size: larger;" id="btn_close">
                        Close
                    </button>
                </div>
            </form>
        </div>
    </main>

    <script>
    (function () {
        var mdd = document.querySelector('#main_div_dialog');
        mdd.hidden = false;
        var mdd_resize = function () {
            mdd.style.left =
                document.documentElement.clientWidth / 2
                - (mdd.clientWidth/2) + 'px';
            mdd.style.top =
                document.documentElement.clientHeight / 2
                - (mdd.clientHeight/2) + 'px';
        }
        window.addEventListener('resize', mdd_resize)
        mdd_resize();


        input_pwd_btn_1.onclick = function (event) {
            (event || window.event).preventDefault();
            pwd.focus();
            return false;
        }

        mdd.querySelector('dialog-title button.close').onclick =
        btn_close.onclick = function () {
            mdd.remove();
            var w = window.open('', '_self');
            w.document.open();
            w.document.write("It is safe to close this page now.");
            w.document.close();
            w.opener = window.opener = null;
            window.close();
            w.close();
        }
        
        show_pswd.onmousedown = show_pswd.onkeypress = function () {
            pwd.type = "text";
        }; show_pswd.onmouseup = function () {
            pwd.type = "password";
            pwd.focus();
        }; show_pswd.onkeyup = function () {
            pwd.type = "password";
        }; show_pswd.oncontextmenu = function () { return false };
    })()
    </script>
</body>

</html>
