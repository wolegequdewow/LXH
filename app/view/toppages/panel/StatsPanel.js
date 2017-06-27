/*统计分析*/
Ext.define('LXH.view.toppages.panel.StatsPanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.statspanel',
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
            imgSrc : 'resources/images/buttons/排污管道.png',
            bgCls : 'orange',
            describe : '污染物排放'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/建设.png',
            bgCls : 'skyblue',
            describe : '建设项目'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/处罚.png',
            bgCls : 'yellow',
            describe : '行政处罚'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/排污.png',
            bgCls : 'slategray',
            describe : '排污收费'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/投诉.png',
            bgCls : 'green',
            describe : '环保热线'
        },{
            xtype : 'functionitem',
            imgSrc : 'resources/images/buttons/河道断面.png',
            bgCls : 'pink',
            describe : '水质断面'
        }]
    }]

});