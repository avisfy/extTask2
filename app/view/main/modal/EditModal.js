Ext.define('ExtTask2.view.main.modal.EditModal', {
    extend: 'Ext.window.Window',
    title: 'Edit user...',
    height: 500,
    width: 400,
    viewModel: 'signIn',

    layout: {
        type: 'anchor',
    },
    defaults: {anchor: '100%'},
    padding: 30,

    items: [{
        xtype: 'inputs',
    }, {
        xtype: 'button',
        text: 'Save',
        bind: {
            disabled: '{isFull}'
        },
        listeners: {
            click: 'onSaveClicked'
        }
    }]
})