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
            onInit: function () { },

            SignUp:function(){  var name=this.getView().getModel().getProperty("/userName");
                var pass=this.getView().getModel().getProperty("/Password");
               localStorage.setItem(name,pass);
               MessageToast.show( "Hi "+name+" Welcome to App One");   
               var Name=localStorage.getItem(name);
               if(Name==pass){
                   var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                   oRouter.navTo("TargetView1");
               }
            },
            Back:function(){
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                   oRouter.navTo("TargetView1");
            }
        });
    });
