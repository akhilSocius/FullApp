sap.ui.define([ 
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(Controller, JSONModel) {
    'use strict';
    return Controller.extend('fullapp.controller.controller.Test', {
        onInit: function() {
            this.getView().setModel(new JSONModel([{
                id: 1,
                name: 'Laptop'
            }, {
                id: 2,
                name: 'Monitor'
            }, {
                id: 3,
                name: 'Mouse'
            }, {
                id: 4,
                name: 'Keyboard'
            }, {
                id: 5,
                name: 'Dock'
            }, {
                id: 6,
                name: 'Desktop'
            }]));
            

            // Odd ID.
            var oddIdBinding = this.getView().byId('oddIdList').getBinding('items');
            console.log(oddIdBinding);
            
            var oddIdFilter = new sap.ui.model.Filter({
                path: 'id',
                test: function(value) {
                    return value % 2;
                }
            });
            
            oddIdBinding.filter(oddIdFilter);
        },
        
        onLengthChange: function(oEvent) {
            var nameLengthBinding = this.getView().byId('nameLengthList').getBinding('items');
            var nameLengthFilter = new sap.ui.model.Filter({
                path: 'name',
                value1: parseInt(oEvent.getParameter('value')),
                comparator: function(value, input) {
                    return value.length < input ? 0 : -1;
                },
                operator: sap.ui.model.FilterOperator.EQ
            });
            
            nameLengthBinding.filter(nameLengthFilter);
        }
    });
});