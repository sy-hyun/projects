sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, History) {
		"use strict";

		return Controller.extend("mentoring0508.controller.View2", {
			onInit: function () {
			},
			onNavBack: function() {
                let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("RouteView1");
            }
		});
		
	}
);
