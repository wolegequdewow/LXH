/*系统设置*/
Ext.define('LXH.view.toppages.panel.SystemPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.systempanel',
    layout : {
        type : 'vbox',
        align : 'center'
    },
    border : false,
    margin : '30 0 0 0',
    items : [{
        layout : 'column',
        width : 880,
        border : false,
        defaults : {
            columnWidth : 0.25,
            margin : 10,
            height : 200
        },
        items : [{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/日志.png',
            bgCls : 'yellow',
            describe : '系统日志'
        }]
    }]

});