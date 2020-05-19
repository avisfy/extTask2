Ext.define('ExtTask2.view.main.users.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-grid',

    requires: [
        'ExtTask2.store.Users'
    ],

    controller: 'main',
    id: 'MyGridPanel',

    store: {
        type: 'users'
    },

    listeners: {
        select: 'onRowSelected'
    },

    tbar: [{
        text: 'Remove selected rows',
        listeners: {
            click: 'onRemoveClicked'
        }
    }],

    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            header: 'Surname',
            dataIndex: 'surname',
            flex: 1
        }, {
            header: 'Email',
            dataIndex: 'email',
            flex: 2
        }, {
            text: 'Date of birth',
            xtype: 'datecolumn',
            dataIndex: 'dateOfBirth',
            formatter: 'date("d.m.Y")',
            width: 115
        }, {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'needDelete',
            width: 60
        }, {
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                iconCls: 'cell-editing-delete-row',
                handler: 'onRowRemoveClicked'
                //html: '<img src="https://s1.iconbird.com/ico/2013/10/464/w512h5121380984608delete.png">'
            }]
        }]

});
