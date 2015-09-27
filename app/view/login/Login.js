Ext.define('TestApp.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',

	requires: [
		'TestApp.view.login.LoginController'
	],

	controller: 'login',
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,

	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
			reference: 'username',
			fieldLabel: 'Username',
			allowBlank: false
		}, {
			xtype: 'textfield',
			name: 'password',
			reference: 'password',
			inputType: 'password',
			fieldLabel: 'Password',
			allowBlank: false
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}]
	}
});
