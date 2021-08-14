sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
/**
 * @param {typeof sap.ui.core.mvc.Controller} Controller
 */
function(Controller, JSONModel){
	"use strict";
	
	return Controller.extend("hyun.sap.training.bindingmentoring.controller.App", {
		onInit: function () {
			var Controller = this.getOwnerComponent().getModel("tableData");
			this.getView().setModel(Controller, "datapool");
			console.log();
		},
		onGo: function () {}
	});
});