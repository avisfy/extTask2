Ext.define('ExtTask2.view.main.SignIn', {
    extend: 'Ext.form.FieldSet',
    xtype: 'sign-in',

    requires: [
        'ExtTask2.view.main.SignInModel',
        'ExtTask2.view.main.MainController'
    ],

    controller: 'main',
    viewModel: 'signIn',

    title: 'Sign in here',
    layout: 'anchor',

    defaults: {anchor: '90%'},
    defaultType: 'textfield',
    items: [{
        fieldLabel: 'Name:',
        bind: '{nameField}'
    }, {
        fieldLabel: 'Surname:',
        bind: '{surnameField}'
    }, {
        fieldLabel: 'Email:',
        bind : '{emailField}',
        vtype: 'email'
    }, {
        xtype: 'datefield',
        fieldLabel: 'Date of birth:',
        maxValue: new Date(),
        bind : '{dateBirthField}'
    }, {
        xtype: 'button',
        text: 'Add new user!',
        bind: {
            disabled: '{isFull}'
        },
        listeners: {
            click: 'onAddClicked'
        }
    }]
})