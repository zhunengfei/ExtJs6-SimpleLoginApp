Ext.define('TestApp.view.help.Help', {
	extend: 'Ext.panel.Panel',
	xtype: 'help',

	requires: [
		'TestApp.view.help.HelpController'
	],

	controller: 'help',

	title: 'Help',
	width: 'fit',
	height: 'fit',
	html: '<h1>Help</h1>',
	bodyPadding: 15,
	renderTo: Ext.getBody(),
	
	tbar: [{
		xtype: 'button',
		text: 'Main',
		handler: 'onButtonMain'
	}]
});