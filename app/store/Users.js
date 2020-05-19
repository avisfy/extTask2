Ext.define('ExtTask2.store.Users', {
    extend: 'Ext.data.Store',

    alias: 'store.users',
    storeId: 'UsersList',
    model: 'ExtTask2.model.User',

    data: { items: [
        { name: 'Name', surname: 'Surname', email: 'namesurname@email.ru', dateOfBirth: new Date(Date.parse('2002-02-20')), needDelete: false },
        { name: 'Ivan', surname: 'Ivanov', email: 'iii@gmail.com', dateOfBirth: new Date(Date.parse('1990-02-01')), needDelete: false }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
