// @ts-nocheck
/*global QUnit*/

sap.ui.define([
    "ns/SAPUI5/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel"
], function (mockserver, opaQunit) {
    "use strict";

    QUnit.module("Navigation ");

    opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

        mockserver.init();

        // Arrangements
        Given.iStartMyUIComponent({
            componentConfig: {
                name: "ns.SAPUI5"
            }
        });


        When.onTheAppPage.iSayHelloDialogButton();

        // Assertions
        Then.onTheAppPage.iSeeTheHelloDialog();

        //Cleanup
        Then.iTeardownMyApp();
    });
});
