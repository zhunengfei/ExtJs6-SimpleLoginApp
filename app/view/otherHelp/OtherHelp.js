Ext.define('TestApp.view.otherHelp.OtherHelp', {
	extend: 'Ext.panel.Panel',
	xtype: 'otherHelp',

	requires: [
		'TestApp.view.otherHelp.OtherHelpController'
	],

	controller: 'otherHelp',

	title: 'OtherHelp',
	width: 'fit',
	height: 'fit',
	bodyPadding: 15,
	renderTo: Ext.getBody(),
	
	tbar: [{
		xtype: 'button',
		text: 'Main',
		handler: 'onButtonMain'
	}],
	items: [{
		xtype: 'label',
		html: '<h2>User list</h2>',
		margin: 5
	}, {
		xtype: 'grid',
		store: 'usersStore',
		width: 'fit',
		margin: 5,
		columns: [{
			text: 'Name', dataIndex: 'name', flex: 1}, {
			text: 'Password', dataIndex: 'password', flex: 2
		}]
	}]
});