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
        this.saveUser(vm);
        vm.set('nameField', null);
        vm.set('surnameField', null);
        vm.set('emailField', null);
        vm.set('dateBirthField', null);
    },

    saveUser: function (vm) {
        debugger
        var name = vm.get('nameField');
        var surname = vm.get('surnameField');
        var email = vm.get('emailField');
        var dateBirth = vm.get('dateBirthField').toDateString();
        var user = {
            name: name,
            surname: surname,
            email: email,
            dateBirth: dateBirth
        };
        Ext.Ajax.request({
            url: 'http://localhost:8080/save_grid',
            method: 'POST',
            success: function (response, opts) {
                console.log('Saved');
            },
            failure: function (response, opts) {
                console.log('Failed saving');
            },
            params: {
                action: "add_user",
                user: user
            }

        })
    },

    onGetClicked: function () {
        var vm = this.getViewModel();
        Ext.Ajax.request({
            url: 'http://localhost:8080/gen_user',
            success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                console.dir(obj);
                vm.set('nameField', obj.name);
                vm.set('surnameField', obj.surname);
                vm.set('emailField', obj.email);
                vm.set('dateBirthField', new Date(Date.parse(obj.date)));
            },
            failure: function (response, opts) {
                console.log('server-side failure with status code ' + response.status);
            }
        })
    },

    afterGridReady: function () {
        var vm = this.getViewModel();
        Ext.Ajax.request({
            url: 'http://localhost:8080/save_grid',
            method: 'POST',
            success: function (response, opts) {
                console.log('Load grid!');
                var user = Ext.decode(response.responseText);
                var store = Ext.getStore('usersList');
                console.dir(user);
                user.map(function (user) {
                    var modelUser = Ext.create('ExtTask2.model.User', {
                        name: user.name,
                        surname: user.surname,
                        email: user.email,
                        dateOfBirth: user.date,
                        needDelete: false
                    });
                    store.add(modelUser);
                })
            },
            failure: function (response, opts) {
                console.log('Failed loading');
            },
            params: {
                action: "from_db"
            }
        })
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
