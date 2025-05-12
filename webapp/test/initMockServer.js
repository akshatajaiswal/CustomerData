sap.ui.define([
	"../localService/mockserver"
], (mockserver) => {
	"use strict";

	// initialize the mock server
	console.log("Init Mockserver")
	mockserver.init();
	// initialize the embedded component on the HTML page
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
