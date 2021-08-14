sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("student10.sap.training.views.controller.MyXMLView", {
			onInit: function () {

			},
			onCBSelect: function() {
				let oCBox = this.byId("idCheckbox");
				if (oCBox.getSelected()) {
					oCBox.setText("Yes");
				} else oCBox.setText("No");
			}
		});
	});
