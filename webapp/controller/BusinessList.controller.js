sap.ui.define([
    'sap/ui/core/mvc/Controller',
    '../model/formatter'
    
], function(Controller,formatter) {
    'use strict';
    return Controller.extend("fullapp.controller.BusinessList",{
        formatter: formatter,
        onInit:function(){
            //location.reload();
        },

        listItemClick:function(oEvent){
            var listItem = oEvent.getParameter("listItem");
            var getTitle = listItem.getTitle();
           var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.navTo("TargetView6",{
               BusinessPartner:String(getTitle)
           });

        },
        backButton:function(){
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.navTo("TargetView2")
        }
    });
    
});