Ext.define('TestApp.view.help.HelpController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.help',
	routes: {
		'main': 'onMain'
	},

	onButtonMain: function() {
		this.redirectTo('main');
	},

	onMain: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.main.Main');
	}
});