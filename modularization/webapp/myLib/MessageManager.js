sap.ui.define(["sap/m/MessageBox",
                "student10/sap/training/modularization/myLib/Formatter"],
    function(MessageBox, Formatter) {
        return {
            reportSuccess: function(sText, sTitle) {
                MessageBox.show(
                    Formatter.capitalizeFirstLetter(sText), {
                        title: Formatter.capitalizeFirstLetter(sTitle)
                    }
                );
            }
        };
    }
);