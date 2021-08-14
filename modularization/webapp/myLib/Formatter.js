sap.ui.define([], function () {
    return {
        capitalizeFirstLetter: function(oletter) {
            return oletter.charAt(0).toUpperCase() + oletter.slice(1);
        } 
    };
});