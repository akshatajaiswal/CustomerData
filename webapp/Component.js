sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], (UIComponent, JSONModel) => {
    "use strict";

    return UIComponent.extend("cu5.details.Component", 
        {   metadata : {
               interfaces: ["sap.ui.core.IAsyncContentCreation"],
               manifest: "json"
            },

            init(){
                UIComponent.prototype.init.apply(this, arguments);
                this.getRouter().initialize();
            }
        }
     )
});