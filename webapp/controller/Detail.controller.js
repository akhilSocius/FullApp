sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
    
], function(Controller,Filter,FilterOperator) {
    'use strict';
    return Controller.extend("fullapp.controller.Detail",{
onInit:function(){
    var that=this;
    
   this._getRouter().getRoute("TargetView6").attachPatternMatched(this._onObjectMatched.bind(this),this);

 setTimeout(function(err){console.log("TimeOut");
 var oddIdBinding = that.getView().byId('oddIdList').getBinding('items');
       
       var oddIdFilter = new Filter({
        path: 'CompanyName',
         value1:window.Name,
        operator:FilterOperator.EQ
    })        
      oddIdBinding.filter(oddIdFilter);
},1000)},
_getRouter:function(){
    return sap.ui.core.UIComponent.getRouterFor(this);
},
_onObjectMatched:function(oEvent){
    var name=oEvent.getParameter("arguments").BusinessPartner;
    window.Name = name;
},
BackButton:function(){
    var that=this;
    var oRouter=sap.ui.core.UIComponent.getRouterFor(that);
    oRouter.navTo("TargetView3");
},
refresh:function(){
    var oddIdBinding = this.getView().byId('oddIdList').getBinding('items');
       
       var oddIdFilter = new Filter({
        path: 'CompanyName',
        value1:window.Name,
        operator:FilterOperator.EQ
    })        
      oddIdBinding.filter(oddIdFilter);

}
})   
});