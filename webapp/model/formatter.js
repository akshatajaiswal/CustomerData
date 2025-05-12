sap.ui.define([], () => {
	"use strict";

	return {
		statusText(sStatus) {
			const oResourceBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "Manager":
					return oResourceBundle.getText("statusManager");
				case "Employee":
					return oResourceBundle.getText("statusEmployee");
				case "Staff":
					return oResourceBundle.getText("statusStaff");
				default:
					return sStatus;
			}
		}
	};
});