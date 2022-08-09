sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller, factory) {
    'use strict';
    return Controller.extend("fullapp.controller.Home",{
        BusinessTilePress:function(){
           var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
           oRouter.navTo("TargetView3");
        },
        ProductTilePress:function(){
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("TargetView4");
        },
        SalesTilePress:function(){
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("TargetView5");
         },
         Signout:function(){
            var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("TargetView1");

         }
 

    });
    
});