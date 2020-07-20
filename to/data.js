(function(){
window.urldata=[];
/****
====Operation instruction====
====Usage method====
Ordinary method:
urldata.push({name:"",url:""})
Advanced method:
urldata.push({function:function(){}})
====Description====
Method for passing in data(@data "The data you want to enter"):
[1]https://shc7432.github.io/to?id=data
[2]https://shc7432.github.io/to?to=data
[3]https://shc7432.github.io/to?name=data
[4]https://shc7432.github.io/to#data
--------
Description of ordinary method:
@name "Url Data" 
@url "Redirect to Url" 
Description of advanced method:
[1]The function can customize the judgment according to the data in the url.
[2]Return "break" can stop judging.
====The end====
****/
//Start the ordinary method
urldata.push({name:"baidu",url:"https://www.baidu.com/s?q1=",regexp:"i"})
urldata.push({name:"百度",url:"https://www.baidu.com/s?q1="})
urldata.push({name:"bilibili",url:"https://www.bilibili.com/",regexp:"i"})
urldata.push({name:"哔哩哔哩",url:"https://www.bilibili.com/"})
urldata.push({name:"b站",url:"https://www.bilibili.com/",regexp:"i"})
urldata.push({name:"BV17x411w7KC",url:"https://b23.tv/BV17x411w7KC"})
urldata.push({name:"钉钉",url:"https://www.dingtalk.com/"})
urldata.push({name:"submitqianm",url:"/download/apps/smallapp/submit.qm"})
urldata.push({name:"小白鼠86",url:"https://space.bilibili.com/487218004"})
urldata.push({name:"水白鼠86",url:"https://space.bilibili.com/487218004"})
urldata.push({name:"氵白鼠86",url:"https://space.bilibili.com/487218004"})
urldata.push({name:"dingtalk",url:"https://www.dingtalk.com/",regexp:"i"})
urldata.push({name:"helloworld",url:"data:text/html,hello world",regexp:"i"})
urldata.push({name:"memes",url:"https://uu.163.com/m/message/12"})
urldata.push({name:"new text",url:"data:text/text,"})

//Stop the ordinary method and start the advanced method

//End
})()
