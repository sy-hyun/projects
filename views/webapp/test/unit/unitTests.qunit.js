/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student10sap.training./views/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
