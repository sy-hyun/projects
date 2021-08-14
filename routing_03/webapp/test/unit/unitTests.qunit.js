/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student03sap.training./routing_03/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
