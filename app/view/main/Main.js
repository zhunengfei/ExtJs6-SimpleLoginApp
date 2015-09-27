Ext.define('TestApp.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',

	requires: [
		'TestApp.view.main.MainController'
	],

	controller: 'main',

	title: 'Main',
	width: 'fit',
	height: 'fit',
	html: '<h1>Hello</h1>',
	bodyPadding: 15,
	renderTo: Ext.getBody(),
	
	tbar: [{
		xtype: 'splitbutton',
		text: 'Файл',
		menu: [{
			text: 'Другая справка',
			handler: 'onButtonOtherHelp'
		}]
	}, {
		xtype: 'button',
		text: 'Справка',
		handler: 'onButtonHelp'
	}],
	
	header: {
		items: [{
			xtype: 'button',
			text: 'Выход',
			handler: 'onButtonLogout'
		}]
	}
});