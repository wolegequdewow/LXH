
Ext.application({
    name: "LXH",
    appFolder: 'app',
    controllers: [
        'AppCtrl',
        'toppages.TopPagesCtrl'
    ],
    requires: ['LXH.lib.Util', 'LXH.config.Runtime'],
    paths: {
        'Ext.ux': 'ext/ux'
    },
    autoCreateViewport: true,
    launch: function () {
        // 页面加载完成之后执行, no param
        //退出按钮
        var div = document.createElement('div');
        div.innerHTML = '<ul><li><a href="login.jsp">注销</a></li><li>您好, admin</li></ul>';
        div.id = 'logout_div';
        document.getElementById("logoPanel").appendChild(div);
    }
});
