sap.ui.jsfragment("student10.sap.training.fragments.view.MyJsFrag", { 
    createContent: function(oController) {
        let jsInput = new sap.m.Input(//{
            // id = "idInput" }
            // id = this.createId("idInput")
            this.createId("idInput")
        );
        let jsButton = new sap.m.Button({
            // text = "Say Hello (JavaScript Fragment)"
            text: "Say Hello (JavaScript Fragment)",
            // press: "onJsButtonPress"
            // press: oController.onJsButtonPress
            press: [oController.onJsButtonPress, oController]
        });
        let jsText = new sap.m.Text(
            // id = "idText"
            this.createId("idText")
        );

        //Create a HorizontalLayout instance and place the three UI elements you created in this step within the content aggregation of this instance. return the HorizontalLayout instance
        return new sap.ui.layout.HorizontalLayout({
            content: [jsInput, jsButton, jsText]
        });
    }
});