<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>数据中心云平台</title>
    <!--ext style-->
    <link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all-neptune.css" />
    <link rel="stylesheet" type="text/css" href="resources/css/exttoast.css" />  <!-- ext toast -->
    <link type="text/css" rel="stylesheet" href="resources/css/iconCls.css"/>
    <!--self style-->
    <link type="text/css" rel="stylesheet" href="resources/css/style.css"/>

    <!--ext script-->
    <!--<script type="text/javascript" src="ext/ext-all-debug.js"></script>-->
    <script  language="javascript" src="ext/bootstrap.js"></script>
    <script  language="javascript" src="ext/locale/ext-lang-zh_CN.js"></script>
    <script  language="javascript" src="resources/js/jquery-2.1.4.min.js"></script>
    <script  language="javascript" src="resources/js/highcharts/highcharts.js"></script>
    <!--entrance-->
    <script type="text/javascript" src="app/app.js"></script>
</head>
<body>

</body>
</html>