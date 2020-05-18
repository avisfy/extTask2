Ext.define('ExtTask2.view.main.UsersView', {
    extend: 'Ext.form.FieldSet',
    xtype: 'users-view',

    requires: [
        'ExtTask2.view.main.UserTable'
    ],

    title: 'User table',
    layout: 'anchor',
    defaults: {anchor: '100%'},
    items: [{
        xtype: 'user-table',
        height: 350
    }]
})