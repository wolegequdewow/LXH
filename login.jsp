<%@ page language="java" pageEncoding="UTF-8" contentType="text/html; charset=utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="cache-control" content="no-cache">
    <meta name="renderer" content="ie-comp">
    <meta http-equiv="expires" content="0">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9,chrome=1">
    <title>数据中心云平台</title>

    <style>
        body {
            margin: 0 auto;
            text-align: center;
            font-size: 12px;
            background-color: #ffffff;
            background-image: url('resources/images/Login/bg.png');
            background-repeat: repeat-x;
        }

        div#content {
            width: 944px;
            height: 640px;
            margin: 0 auto;
            background-image: url('resources/images/Login/background.png');
            background-repeat: no-repeat;
            background-position: 0 0;
            position: relative;
        }

        input.text {

            border: none;
            height: 22px;
            line-height: 22px;
            padding-top: 0px;
            padding-right: 3px;
            padding-bottom: 0px;
            padding-left: 3px;
            background-color: transparent;
            width: 215px;
        }

        input.text#usernameinput {
            top: 261px;
            left:161px;
            position: relative;
            width: 278px;
            height: 42px;
            padding-top: 2px;
            padding-left: 45px;
            font-size: 14px;
            line-height: 42px;
        }

        input.text#pwdinput {
            top: 329px;
            left:-171px;
            position: relative;
            width: 278px;
            height: 42px;
            padding-top: 2px;
            padding-left: 45px;
            font-size: 14px;
            line-height: 42px;
        }

        #error {
            height: 40px;
            width: 180px;
            text-align: left;
            top: 340px;
            left: 308px;
            position: relative;
            color: red
        }

        input.submit {
            width: 131px;
            height: 49px;
            background: url("resources/images/Login/btn.png") left top no-repeat;
            border: 0px;
            cursor: pointer;
            position: relative;
            top: 317px;
            left: 125px;
        }

        input.submit:hover {
            background-position: left -50px;
        }


        a {
            font-size: 15px;
            font-family: 微软雅黑, simsun;
            cursor: pointer;
            color: #0066CC;
            text-decoration: underline;
        }

        a:HOVER {
            color: blue
        }

        a#userregister {
            position: relative;
            top: 320px;
            left: -200px;
        }

        a#registerinfoupd {
            position: relative;
            top: 327px;
            left: -146px;
        }

        #bottom {
            border: 0px;
            position: relative;
            top: 380px;
        }
        #bottom div{
            color:gray;
        }
    </style>

    <script language="javascript" type="text/javascript">
        document.onkeypress = function(e) {	//键盘enter事件
            var code;
            if (!e) {
                var e = window.event;
            }
            if (e.keyCode) {
                code = e.keyCode;
            } else if (e.which) {
                code = e.which;
            }
            if (code == 13) {
                document.getElementById("login").click(); //调用登录按钮的登录事件
                /// return false;
            }
        };
        var onSubmitClick = function(){//点击提交
            location.href = 'index.jsp';
        };
    </script>

</head>
<body>
<div id="content">
    <form id="form">
        <input type="text" class="text" name="username" maxlength="20"  id="usernameinput"/>
        <input type="password" class="text" name="password" id="pwdinput" />
        <div class="msg"  id="error"></div>
        <input id="login" type="button" class="submit" onclick="onSubmitClick();" />
    </form>
    <div id="bottom">
        <div> 版权所有 ：环境保护局 </div>
        <div>浏览器建议使用Internet Explorer 9.0及以上版本 </div>
    </div>
</div>
</body>
</html>