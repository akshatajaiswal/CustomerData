sap.ui.define([
	"sap/ui/core/util/MockServer"
], (MockServer) => {
	"use strict";

	return {
		init() {


			console.log(" Mockserver")
			// create
			const oMockServer = new MockServer({
				rootUri: "/V3/Northwind/Northwind.svc/"
			});

			const oUrlParams = new URLSearchParams(window.location.search);

			// configure mock server with a delay
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: oUrlParams.get("serverDelay") || 500
			});

			// simulate
			const sPath = sap.ui.require.toUrl("cu5/details/localService");
			oMockServer.simulate(sPath + "/metadata.xml", sPath + "/mockdata");

			// start
			oMockServer.start();
		}
	};
});
