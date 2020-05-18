
Ext.define('ExtTask2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClicked: function () {
        var vm = this.getViewModel();
        var name = vm.get('nameField');
        var surname = vm.get('surnameField');
        var email = vm.get('emailField');
        var dateBirth = vm.get('dateBirthField');
        var user = Ext.create('User', { name: name, surname: surname, email: email, dateOfBirth: dateBirth, needDelete: false });
        var s = Ext.getStore('UsersList');
        s.add(user);
        vm.set('nameField', '');
        vm.set('surnameField', '');
        vm.set('emailField', '');
        vm.set('dateBirthField', '');
    },

    onRemoveClicked: function () {
        var s = Ext.getStore('UsersList');
        s.each(function(record){
            if(record.get('needDelete')) {
                s.remove(record);
            }
        });
    },

    onRowRemoveClicked: function (view, recIndex, cellIndex, item, e, record) {
        var s = Ext.getStore('UsersList');
        s.remove(record);
    }
});
