sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,ODataModel) {
		"use strict";

		return Controller.extend("binding.databinding.controller.View2", {
			onAfterRendering : function (params) {
				// 화면이 랜더링 되고 나서 자동 호출되는 후크 메소드
				debugger;
				
				console.log(this.getView().getModel("addedComponent"));
			},
			onButtonPress : function (params) {
				debugger;	
			},
			onInit: function () {
				debugger;
				
				console.log(this.getOwnerComponent().getModel("addedComponent"));
				console.log(this.getView().getModel("addedComponent"));
			}

		});
	});
