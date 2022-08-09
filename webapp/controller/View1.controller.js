

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast) {
        "use strict";

        return Controller.extend("fullapp.controller.View1", {
            onInit: function () {
                

            },
            login:function(oEvent){
                 var name=this.getView().getModel().getProperty("/userName");
                 var pass=this.getView().getModel().getProperty("/Password");
                 const chekUser=localStorage.getItem(name);
            if(chekUser && chekUser==pass){
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetView2");
                }

             else{
                    MessageToast.show("Enter valid username and password");
                 }
            },

            signUp:function(){

                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetView7");
                  
            }  
        });
    });
