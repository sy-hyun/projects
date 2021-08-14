sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("routing03.controller.Master", {
			onInit: function () {

            },
            onGo: function(oEvent) {
                //0.클릭된 항공사 코드 취득하기
                var sCarrid = oEvent.getSource().getBindingContext().getProperty("Carrid");

                //1. 라우터 얻어 오기 (manifest에 있지만 결국 component에서 오는 거라 component에서 가져옴 )
                    var oRouter = this._getRouter();
                //2. 라우터 통해 해쉬 태그(manitest-Routes에 있음) 변경하기
                oRouter.navTo("RouteDetail", {
                    Carrid: sCarrid
                }); 

                
            },      
            _getRouter:function() {
                return this.getOwnerComponent().getRouter();
            }
		});
	});
