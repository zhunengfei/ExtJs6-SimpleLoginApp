Ext.define('TestApp.Application', {
  extend: 'Ext.app.Application',
  name: 'TestApp',
  
  models: ['TestApp.model.User'],

  stores: ['TestApp.store.Users'],

  views: [
    'TestApp.view.login.Login',
    'TestApp.view.main.Main',
    'TestApp.view.help.Help',
    'TestApp.view.otherHelp.OtherHelp'
  ],

  defaultToken: 'main',

  launch: function() {
    Ext.create('TestApp.view.main.Main');
  }
})