/**
 * Created by HNCG on 2017/5/2.
 */
Ext.define('LXH.view.Viewport', {
    extend : 'Ext.container.Viewport',
    layout : {
        type : 'border'
    },
    defaults : {
        border : true
    },
    items : [{ // logo栏
        id: 'logoPanel',
        height : 70,
		region : 'north',
        bodyStyle : "background:url('resources/images/header_back.png');",
        items : [{
            xtype : 'image',
            src : 'resources/images/logo.png',
            margin: '15 0 0 0'
        }
        ]
    }, { // center内容区
        id : 'centPanel',
		region : 'center',
        layout : 'fit',
        defaults : {
            border : false
        }
    },{ // foot栏
        id: 'footPanel',
		region : 'west',
		width : 200,
		style : {
        	background : 'rgb(54,68,84)'
		},
		defaults : {
			height : 50,
			style : {
				backgroundColor : 'rgb(54,68,84)'
			},
			border : false
		},
		items : [{
			xtype : 'container',
			name : 'main',
    		html : '<a class="foot_btn foot_btn1 on" data-url="Homepagepanel"><span>首页</span></a>'
		},{
			xtype : 'container',
			name : 'YWSJ',
    		html : '<a class="foot_btn foot_btn2" data-url="Governdatapanel"><span>业务数据</span></a>'
		},{
			xtype : 'container',
			name : 'TJFX',
    		html : '<a class="foot_btn foot_btn3" data-url="Statspanel"><span>统计分析</span></a>'
		},{
			xtype : 'container',
			name : 'XTSZ',
    		html : '<a class="foot_btn foot_btn4" data-url="Systempanel"><span>系统设置</span></a>'
		},{
			flex: 1
		}]
    }]

});
