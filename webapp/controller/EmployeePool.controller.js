sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], (Controller, MessageToast) => {
	"use strict";

	return Controller.extend("cu5.details.controller.EmployeePool", {

		onListItemPress(oEvent){
			MessageToast.show("Pressed : " + oEvent.getSource().getTitle());
		}
    });
})