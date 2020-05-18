Ext.define('ExtTask2.view.main.UserTable', {
    extend: 'Ext.grid.Panel',
    xtype: 'user-table',

    requires: [
        'ExtTask2.store.Users',
        'ExtTask2.view.main.MainController'
    ],

    controller: 'main',

    store: {
        type: 'users'
    },

    plugins: [{
        ptype: 'rowediting',
        clicksToMoveEditor: 1,
        autoCancel: false
    }],

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
            flex: 1,
            editor: {
                allowBlank: false
            }
        }, {
            header: 'Surname',
            dataIndex: 'surname',
            flex: 1,
            editor: {
                allowBlank: false
            }
        }, {
            header: 'Email',
            dataIndex: 'email',
            flex: 2,
            editor: {
                allowBlank: false,
                vtype: 'email',
            }
        }, {
            header: 'Date of birth',
            xtype: 'datecolumn',
            dataIndex: 'dateOfBirth',
            formatter: 'date("d.m.Y")',
            width: 115,
            editor: {
                xtype: 'datefield',
                allowBlank: false,
                maxValue: new Date(),
                formatter: 'date("d.m.Y")'
            }
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
                handler: 'onRowRemoveClicked',
                //html: '<img src="https://s1.iconbird.com/ico/2013/10/464/w512h5121380984608delete.png">'
            }]
        }]

});
