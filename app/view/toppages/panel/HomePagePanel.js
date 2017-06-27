/*首页*/
Ext.define('LXH.view.toppages.panel.HomePagePanel', {
    extend : 'Ext.panel.Panel',
    alias : 'widget.homepagepanel',
    layout : 'hbox',
    defaults : {
        height : '100%',
        margin : 5
    },
    items : [{
        xtype : 'homeleftpanel',
        flex : 1
    },{
        xtype : 'homerightpanel',
        flex : 2
    }]

});