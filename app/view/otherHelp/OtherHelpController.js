Ext.define('TestApp.view.otherHelp.OtherHelpController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.otherHelp',
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
})