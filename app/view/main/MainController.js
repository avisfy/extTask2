Ext.define('ExtTask2.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onAddClicked: function () {
        var vm = this.getViewModel();
        var name = vm.get('nameField');
        var surname = vm.get('surnameField');
        var email = vm.get('emailField');
        var dateBirth = vm.get('dateBirthField');
        var user = Ext.create('ExtTask2.model.User', {
            name: name,
            surname: surname,
            email: email,
            dateOfBirth: dateBirth,
            needDelete: false
        });
        var s = Ext.getStore('usersList');
        s.add(user);
        vm.set('nameField', null);
        vm.set('surnameField', null);
        vm.set('emailField', null);
        vm.set('dateBirthField', null);
    },

    onRemoveClicked: function () {
        var s = Ext.getStore('usersList');
        s.each(function (record) {
            if (record.get('needDelete')) {
                s.remove(record);
            }
        });
    },

    onRowRemoveClicked: function (view, recIndex, cellIndex, item, e, record) {
        var s = Ext.getStore('usersList');
        s.remove(record);
    },

    onRowDblClicked: function (ths, record, item, index, e, eOpts ) {
        this.getViewModel().set('actualRow', index);
        var  window = Ext.create('ExtTask2.view.main.modal.EditModal');
        window.show();
    }

});
