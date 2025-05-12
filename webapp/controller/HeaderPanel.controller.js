sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("cu5.details.controller.HeaderPanel", {

		onInit(){
			MessageToast.show("Have a good day!");
		},
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "Manager":
					return oResourceBundle.getText("statusManager");
				case "Employee":
					return oResourceBundle.getText("statusEmployee");
				case "Supplier":
					return oResourceBundle.getText("statusSupplier");
				default:
					return "sap-icon://crm-sales";
			}
		},

		onPress() {
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("employeePool");
		}
    });
});