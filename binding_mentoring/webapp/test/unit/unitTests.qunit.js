/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"hyunsap.training./binding_mentoring/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
