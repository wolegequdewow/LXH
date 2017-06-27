/**
 * Created by HNCG on 2017/6/8.
 */
Ext.define('LXH.controller.toppages.TopPagesCtrl', {
    extend : 'Ext.app.Controller',
    requires : [],
    stores : [],
    models : [],
    views : [
        'toppages.container.FunctionItem',
        'toppages.window.PrimaryWin',
        'toppages.panel.HomePagePanel',
        'toppages.panel.HomeLeftPanel',
        'toppages.panel.HomeRightPanel'
    ],
    refs : [
        {ref : 'functionitem', selector : 'functionitem', xtype:'functionitem', autoCreate: true},
        {ref : 'primarywin', selector : 'primarywin', xtype:'primarywin', autoCreate: true},
        {ref : 'homepagepanel', selector : 'homepagepanel', xtype:'homepagepanel', autoCreate: true},
        {ref : 'homeleftpanel', selector : 'homeleftpanel', xtype:'homeleftpanel', autoCreate: true},
        {ref : 'homerightpanel', selector : 'homerightpanel', xtype:'homerightpanel', autoCreate: true}
    ],

    init : function() {
        var me = this;
        me.control({
            'functionitem' : {
                beforerender : this.drawFunctionItem,
                afterrender : this.functionItemClick
            }
        });
    },
    /*生成item*/
    drawFunctionItem : function (item) {
        item.html =
            "<a class='function_item "+ item.bgCls +"'>" +
            "<img src=' " + item.imgSrc + "' />" +
            "<span>" + item.describe + "</span>"    +
            "</a>";
    },
    /*点击事件*/
    functionItemClick : function (item) {
        var me = this;
        item.getEl().on('click' , function () {
            // alert(item.url);
            if(item.describe){
                var win = me.getPrimarywin();

                win.setTitle(item.describe);
                win.show();
            }
        })
    }
});
