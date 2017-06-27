/**
*存放所有工程工具函数，勿修改
*如需增加本地工程工具方法，可在app/lib/LocalUtil.js中添加，作好注释
*有什么好用的通用工具函数可以通知周忠修改Util.js文件
*/

Ext.define('LXH.lib.Util', {
    singleton: true,
    requires: [
		'LXH.lib.LocalUtil'	//本地工程工具类
    ],
    //关闭所有可关闭的tab
    closeAllClosableTab: function () {
		var tabPanel = window.top.Ext.getCmp('centerTabPanel'),
			tabs;
		if (tabPanel) {
			tabs = tabPanel.query('container[closable=true]');
			Ext.Array.each(tabs, function (ctab) {
				tabPanel.remove(ctab);
			});
		}
    },
    //向centerTabPanel中增加tab，通用
    addNewTabCommon: function (tabType, id, text, url, closeOthers) {
		var tabId = 'tab_' + id,
			tabConifg = {
				hideMode: 'offsets',//防止显示出错
				iconCls: 'tab',
				title: "<b>" + text + "</b>",
				itemId: tabId,
				closable: true,
				activate: true,
				defaults: { autoScroll: true },
				tabConfig: {
					tooltip: text,
					width: 120
				}
			},
			tabPanel = window.top.Ext.getCmp('centerTabPanel'),
			currentTab,
			tab;
		if (tabPanel) {
			if (closeOthers) {//如果要关闭其他tab
				this.closeAllClosableTab();
			}
			currentTab = tabPanel.getComponent(tabId);
			if (!currentTab) {
				//如果不存在则新建
				if (tabType === 'Component') {//组件直接创建
					tab = tabPanel.add(Ext.create(url, tabConifg));
				} else if (tabType === 'URL') {//URL增加iframe
					tabConifg.html = '<iframe src="' + url + '" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>';
					tab = tabPanel.add(tabConifg);
				}
				tab.tab.show();
				tabPanel.setActiveTab(tab);
			} else {
				currentTab.tab.show();
				tabPanel.setActiveTab(currentTab);
			}
		}
    },
    /**
     * 向tabPanel中增加tab
     */
    addNewTab: function (tabType, id, text, url) {
		this.addNewTabCommon(tabType, id, text, url);
	},
	 /**
     * 向tabPanel中增加tab,并关闭其他可关闭的tab
     */
    addNewTabCloseOthers: function (tabType, id, text, url) {
		var closeOthers = true;
		this.addNewTabCommon(tabType, id, text, url, closeOthers);
	},
	maskCenterTabPanel:function(){
		window.top.Ext.getCmp('centerTabPanel').getEl().mask(getConfig('pageLoading'));
	},
	unmaskCenterTabPanel:function(){
		window.top.Ext.getCmp('centerTabPanel').getEl().unmask();
	}
});

/**
*	自定义Ext消息弹出框，样式定义在example.css
*/

var ExtMsg = (function () {
    var msgCt;
    function createBox(t, s) {
        return '<div class="msg"><h3>' + t + '</h3><p>' + s + '</p></div>';
    }
    return {
        msg : function (resultVale, content) {
			var title = '操作成功',
				s,
				m;
			if (resultVale === -1) {
				title = '操作失败';
			}
            if (!msgCt) {
                msgCt = Ext.DomHelper.insertFirst(document.body, {id: 'msg-div'}, true);
            }
            s = Ext.String.format.apply(String, Array.prototype.slice.call(arguments, 1));
            s = '<font face="微软雅黑" size="3">' + s + '</font>';
            m = Ext.DomHelper.append(msgCt, createBox(title, s), true);
            m.hide();
            m.slideIn('t').ghost("t", { delay: 1000, remove: true});
        },

        init : function () {
            if (!msgCt) {
                msgCt = Ext.DomHelper.insertFirst(document.body, {id: 'msg-div'}, true);
            }
        }
    };
}());

 //得到控制器的快速方法
var getCtrl = function (ctrl) {
	return MyApp.app.getController(ctrl);
};
 // 读取配置文件 MyApp.config.LocalRuntime的快速方法
var getConfig = function (name) {
	return MyApp.config.Runtime[name];
};
//读取本地工程配置文件 MyApp.config.LocalRuntime的快速方法
var getLocalConfig = function (name) {
	return MyApp.config.LocalRuntime[name];
};
 //设置MyApp.config.Runtime配置文件的参数值
var setConfig = function (name, value) {
	MyApp.config.Runtime[name] = value;
	return MyApp.config.Runtime[name];
};
  //设置MyApp.config.LocalRuntime本地工程配置文件的参数值
var setLocalConfig = function (name, value) {
	MyApp.config.LocalRuntime[name] = value;
	return MyApp.config.LocalRuntime[name];
};
 /**
  * 操作结果弹出框
  * @param {} result 结果类型
  */
var showOpMsg = function (result) {
	//操作成功
	if (result === 'success') {
	　　  Ext.MessageBox.show({
　　		  title: getConfig('opResult'),
　　		  msg: getConfig('opSuccess'),
　　		  buttons: Ext.MessageBox.OK,
　　		  icon: Ext.Msg.INFO
	　　　 });
	} else if (result === 'failure') {	//操作失败
		Ext.MessageBox.show({
		    title: getConfig('opResult'),
		    msg: getConfig('opFailure'),
		    buttons: Ext.MessageBox.OK,
		    icon: Ext.Msg.ERROR
	　　  });
	}
};
/**
* 向store添加新record
* @param {} store store
* @param {} newRecords 要添加的record数组 
* @param {} property 用来比较的属性,唯一标识这条记录
*/
var addNewRecords = function (store, newRecords, property) {
	var count = 0,
		i;
	for (i in newRecords) {
		if (newRecords.hasOwnProperty(i)) {
			if (store.find(property, newRecords[i].get(property)) === -1) {
				//若store中没有此条记录则添加
				store.add(newRecords[i]);
				count += 1;
			}
		}
	}
	return count;
};

//model[]转换为object[]
var transModelsToDatas = function (models) {
	var datas = [],
		o;
	for (o in models) {
		if (models.hasOwnProperty(o)) {
			datas[o] = models[o].getData();
		}
	}
	return datas;
};
//拿到store里所有的model
var getAllRecords = function (store) {
	return store.getRange(0, store.getCount() - 1);
};
/**
 *	get All datas in store
 */
var getAllStoreDatas = function (store) {
	var datas = [];
	store.each(function (record) {
		datas.push(record.getData());
	});
	return datas;
};