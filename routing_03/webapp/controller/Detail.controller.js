sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("routing03.controller.Detail", {
			onInit: function () {
                //Route에 가서 패턴을 읽어서 일치하면 호출한다?
                this._getRouter().getRoute("RouteDetail").attachPatternMatched(this._onPatternMatched,this);

           },
            onBack: function() {
                //1. 라우터 얻어 오기 (manifest에 있지만 결국 component에서 오는 거라 component에서 가져옴 )
                    var oRouter = this._getRouter();
                //2. 라우터 통해 해쉬 태그(manitest-Routes에 있음) 변경하기
                oRouter.navTo("RouteMaster", {}); 
            },      
            _getRouter:function() {
                return this.getOwnerComponent().getRouter();
            },
            _onPatternMatched(oEvent) {
                //콜백 함수 (특정시점이 되면 자동으로 호출하고 싶음?)
                var sCarrid = oEvent.getParameter("arguments").Carrid;

               //1. view에 바인딩 함
               this.getView().bindElement("/CarrierSet('" + sCarrid + "')");

               //2. 화면에 그린 테이블 또는 리스트에 바인딩 함 
            //    this.getView().byId("idConnections").bindElement("Connections");
            }
		});
	});
