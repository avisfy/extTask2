Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name',  type: 'string'},
        {name: 'surname', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'dateOfBirth', type: 'date'},
        {name: 'needDelete', type: 'boolean'},
    ]
});