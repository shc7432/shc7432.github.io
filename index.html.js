(function () {
    try { (JSON.parse(localStorage.basicConfigurationOfWebsite)); }
    catch (e) { localStorage.basicConfigurationOfWebsite = '{}' };
    if (false) Object.defineProperty(window, 'basicset', {
        get () {
            return (JSON.parse(localStorage.basicConfigurationOfWebsite));
        },
        set (v) {
            localStorage.basicConfigurationOfWebsite = JSON.stringify(v);
        }
    });
    window.basicset = (JSON.parse(localStorage.basicConfigurationOfWebsite));
    window.syncset = function () {
        localStorage.basicConfigurationOfWebsite =
            JSON.stringify(window.basicset);
    };

    if (basicset.accept_cookies === void 0) {
        document.querySelector('#cookie_ch .accept').onclick =
        document.querySelector('#cookie_ch_cu .accept').onclick =
        function () {
            basicset.accept_cookies = true;
            location.reload();
        };
        document.querySelector('#cookie_ch .text .c').onclick = function (e) {
            e.preventDefault();
            document.querySelector('#cookie_ch .text .l').click();
            return false;
        };
        document.querySelector('#cookie_ch .decline').onclick =
        document.querySelector('#cookie_ch_cu .decline').onclick =
        function () {
            basicset.accept_cookies = false;
            localStorage.clear();
            location.reload();
        };
        document.querySelector('#cookie_ch .custom').onclick = function () {
            this.disabled = true;
            this.parentElement.parentElement.style.zIndex = 72;
            CreateDialogEx({element:cookie_ch_cu,modal:true,noCloseOnEsc:true});
        };
        cookie_ch.hidden = document.querySelector(".cookie_ch-background").hidden = false;
    } else if (basicset.accept_cookies == false) {
        document.querySelector(".cookie_ch-background").hidden = false;
        //localStorage.clear();
    } else if (basicset.accept_cookies == true) {
        cookie_ch.remove();
        document.querySelector(".cookie_ch-background").remove();
    };

    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent) && (!getUrlValue('desktopSite'))) {
        functionBtns.hidden = !(
            mFunctionBtn.hidden = 
            micon.hidden =
            todesktop.hidden =
            todesktop_split.hidden =
        0);
    }

    mFunctionBtn.onclick = function () {
        mFunction.hidden = 0
    }
    todesktop.onclick = function (e) {
        e.preventDefault();
        var f = document.createElement('FORM'), ipt = document.createElement('input');
        ipt.name = "desktopSite"; ipt.value = !!1;
        f.appendChild(ipt);
        f.submit();
    }

    var bc = basicset.siteconfig;
    if (!bc) bc = {};
    lang.innerHTML = m_lang.innerHTML = bc.lang = (bc.lang || "English");

    if (bc.lang == "English") { lanseten.selected = 1 } else { lansetzh.selected = 1 }
    bc.iconauto = bc.iconauto || 'true';
    autoicon.checked = bc.iconauto;
    bc.welcomewd = bc.welcomewd || 'Welcome to our website!';
    Swecwd.value = wecwd.innerHTML = bc.welcomewd;

    //basicset = JSON.stringify({ siteconfig: bc, userconfig: basicset.userconfig });

    textToImg = function (text, fontsize, fontcolor) {
        var canvas = document.createElement('canvas');
        var s = (typeof (set) == "object" || {});
        //小于32字加1  小于60字加2  小于80字加4    小于100字加6
        $buHeight = 0;
        if (fontsize <= 32) { $buHeight = 1; }
        else if (fontsize > 32 && fontsize <= 60) { $buHeight = 2; }
        else if (fontsize > 60 && fontsize <= 80) { $buHeight = 4; }
        else if (fontsize > 80 && fontsize <= 100) { $buHeight = 6; }
        else if (fontsize > 100) { $buHeight = 10; }
        //对于g j 等有时会有遮挡，这里增加一些高度
        canvas.height = fontsize + $buHeight;
        var context = canvas.getContext('2d');
        // 擦除(0,0)位置大小为200x200的矩形，擦除的意思是把该区域变为透明
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = fontcolor;
        context.font = fontsize + "px " + ("Arial");
        //top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
        context.textBaseline = (s.textBaseline || s.textbaseline || 'middle');
        context.fillText(text, 0, fontsize / 2)
        //如果在这里直接设置宽度和高度会造成内容丢失 , 暂时未找到原因 , 可以用以下方案临时解决
        //canvas.width = context.measureText(text).width;
        //方案一：可以先复制内容  然后设置宽度 最后再黏贴   
        //方案二：创建新的canvas,把旧的canvas内容黏贴过去 
        //方案三： 上边设置完宽度后，再设置一遍文字
        //方案一： 这个经过测试有问题，字体变大后，显示不全,原因是canvas默认的宽度不够，
        //如果一开始就给canvas一个很大的宽度的话，这个是可以的。   
        //var imgData = context.getImageData(0,0,canvas.width,canvas.height);  //这里先复制原来的canvas里的内容
        //canvas.width = context.measureText(text).width;  //然后设置宽和高   
        //context.putImageData(imgData,0,0); //最后黏贴复制的内容
        //方案三：改变大小后，重新设置一次文字
        canvas.width = context.measureText(text).width;
        context.fillStyle = fontcolor;
        context.font = fontsize + "px " + (s.fontFamily || s.fontfamily || "Arial");
        context.textBaseline = (s.textBaseline || s.textbaseline || 'middle');
        context.fillText(text, 0, fontsize / 2)

        var dataUrl = canvas.toDataURL('image/png');//注意这里背景透明的话，需要使用png
        return dataUrl;
    }
    function changeIconColor(b) {
        var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
        icon.src = icon2.src = micon.src = textToImg('The WebSite', 20, color);
        functionBtns.style.overflow = "auto";
        if (!basicset.siteconfig) basicset.siteconfig = {iconauto:true};
        if (basicset.siteconfig.iconauto && b) setInterval(changeIconColor, 5000);
    }
    changeIconColor(1);
    function exSettings(s) {
        prompt('Please save your import key:', JSON.stringify(JSON.parse(localStorage.basicConfigurationOfWebsite).siteconfig));
    }
    function imSettings(fw, str) {
        let a = JSON.parse(localStorage.basicConfigurationOfWebsite);
        a.siteconfig = JSON.parse(str);
        basicset = a;
    }
    function siteconfigsSave() {
        let a = {};
        a.welcomewd = Swecwd.value;
        a.iconauto = autoicon.checked;
        a.lang = langset.value;
        let b = { siteconfig: a, userconfig: basicset.userconfig };
        basicset = a;
        showMessage('Config Saved.');
        if (confirm('Config saved.\nThe webpage needs to be restarted to apply these changes.\nReload?')) location.reload(!!1);
    }
    function checkPageUrl() {
        try {
            let pageurl = location.hash;
            if (pageurl.indexOf('#/settings') == 0) {
                CreateDialog(siteconfigs);
                location.hash = '';
            }
            if (pageurl.indexOf('#/contents') == 0) {
                CreateDialog(contents);
                location.hash = '';
            }

        } catch (e) {};
    }

    window.addEventListener('load', checkPageUrl);
    window.addEventListener('hashchange', checkPageUrl);

    window.addEventListener('beforeunload', function () {
        syncset();
    });
    
})();
