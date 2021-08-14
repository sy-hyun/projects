sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("student10.sap.training.fragments.controller.Main", {
			onXmlButtonPress: function () {
				// text: oController.idInput
				let xmlInput = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idInput"));
				let xmlText = this.byId(sap.ui.core.Fragment.createId("idXmlFrag", "idText"));
                // 
                // xmlText.setText("Hello " + xmlButton.getValue());
                xmlText.setText("Hello " + xmlInput.getValue());
			},
			onJsButtonPress: function () {
				let jsInput = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idInput"));
				let jsText = this.byId(sap.ui.core.Fragment.createId("idJsFrag", "idText"));
				jsText.setText("Hello " + jsInput.getValue());
			}
		});
	});
