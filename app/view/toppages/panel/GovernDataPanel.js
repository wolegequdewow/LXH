/*业务数据*/
Ext.define('LXH.view.toppages.panel.GovernDataPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.governdatapanel',
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
            imgSrc : 'resources/images/buttons/源.png',
            bgCls : 'orange',
            describe : '污染源'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/生态.png',
            bgCls : 'skyblue',
            describe : '生态环境'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/环境.png',
            bgCls : 'yellow',
            describe : '环境质量'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/政务.png',
            bgCls : 'slategray',
            describe : '法律法规'
        }]
    }]
});