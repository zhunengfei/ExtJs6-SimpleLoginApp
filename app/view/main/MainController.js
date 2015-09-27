Ext.define('TestApp.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	routes: {
		'login': 'onLogin',
		'help': 'onHelp',
		'other_help': 'onOtherHelp'
	},

	beforeInit: function() {
		if (!localStorage.getItem("checkedUser")) {
			this.redirectTo('login');
		}
	},

	onButtonLogout: function() {
		localStorage.removeItem('checkedUser');
		this.redirectTo('login');
	},

	onButtonHelp: function() {
		this.redirectTo('help');
	},
	onButtonOtherHelp: function() {
		this.redirectTo('other_help');
	},

// routes
	onLogin: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.login.Login');
	},
	onHelp: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.help.Help');
	},
	onOtherHelp: function() {
		this.getView().destroy();
		Ext.create('TestApp.view.otherHelp.OtherHelp');
	}
});