sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"student10/sap/training/mentoring0522rebinding/model/models",
	"sap/ui/model/json/JSONModel"	//1.JSONModel 사용
], function (UIComponent, Device, models, JSONModel) {	//2. JSONModel 객체?입력
	"use strict";

	return UIComponent.extend("student10.sap.training.mentoring0522rebinding.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			let model = new JSONModel(	//3.생성자 방식(new~)	//함수()안에 객체{}를 넣음		//이게 디버깅하면 모델명 하부의 OData로 출력
				{
					name : 'hyun',
					family : [
						{
							name : 'mi'
						}
					]
				}
			);

			debugger;

			model.setProperty('/string', '22');		//값 넣음. string안에 22로 넣음

			let familys = model.getProperty('/family');		

			this.setModel(model, 'testObj');	//JSONModel객체, 이름

			// let oModelCalled = this.getModel('testObj');		//model 불러오기
				

//--------------------------------------------------------------------------------------------------------------------------------
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
