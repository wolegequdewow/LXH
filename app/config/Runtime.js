/**
 * 
 * 记录全局变量及各种配置参数
 *  
 */
Ext.define('LXH.config.Runtime', {
    singleton : true,
	requires: ['LXH.config.LocalRuntime'//本地工程配置参数及全局变量
		],
    config : {
		/**
		*	1.配置信息
		*/
		//grid相关配置
        pageSize : 18,//每页显示条数
        idColumnWidth: 40,//id列宽度
		/**
		*	2.全局变量
		*/
		/**
		*	3.提示信息
		*/
        //提示tpl
        requiredTpl : '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
		//数据加载提示        
		dataLoading: '加载中...',
        //操作提交提示
        opSubmiting: '操作提交中...',
        //页面加载提示
		pageLoading : '页面加载中...',
        //操作结果提示信息
        opTooltip: '操作提示',
        opResult: '操作结果',
        opSuccess: '<font size="3" face="微软雅黑">操作成功！</font>',
        opFailure: '<font size="3" face="微软雅黑">操作失败！</font>',
        opDelWarn: '<font size="2" face="微软雅黑">删除不可恢复,确定删除吗?</font>'
	},
    constructor : function (config) {
        this.initConfig(config);
    }
});