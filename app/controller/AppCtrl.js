/**
 * App整体控制
 */
Ext.define('LXH.controller.AppCtrl', {
    extend : 'Ext.app.Controller',
    requires : [],
    stores : [],
    models : [],
    views : [
        'Viewport',
        'toppages.panel.GovernDataPanel',
        'toppages.panel.HomePagePanel',
        'toppages.panel.StatsPanel',
        'toppages.panel.SystemPanel'
    ],
    refs : [
    	{ref : 'viewport', selector : 'viewport', xtype:'viewport'},
    	{ref : 'governdatapanel', selector : 'governdatapanel', xtype:'governdatapanel', autoCreate: true},
    	{ref : 'homepagepanel', selector : 'homepagepanel', xtype:'homepagepanel', autoCreate: true},
    	{ref : 'statspanel', selector : 'statspanel', xtype:'statspanel', autoCreate: true},
    	{ref : 'systempanel', selector : 'systempanel', xtype:'systempanel', autoCreate: true}
    ],

    init : function() {
        var me = this;
        this.listen({
            component : {
                'viewport' : {
                    afterrender : me.initEvents
                }
            }
        });
        me.control({
         	
        });
    },
    
    initEvents : function(){
        var me = this,
            centPanel = me.getViewport().down("#centPanel");

		$(".foot_btn").click(function(){
			var btn = $(this),
				url ;
			if(!btn.hasClass("on")){
				url = btn.attr("data-url");
				//改变样式
                $(".foot_btn").removeClass("on");
				btn.addClass("on");
                //加载panel
                var thisPanel = eval("me.get"+url)();
                centPanel.removeAll();
                centPanel.add(thisPanel);
			}
		});
        centPanel.add(me.getHomepagepanel());
    }
});
