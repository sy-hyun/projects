sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
	],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("binding.databinding.controller.App", {
			onInit: function () {
			},
			onButtonPress: function(pageNum){
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("View"+pageNum);
			}
		});
	});