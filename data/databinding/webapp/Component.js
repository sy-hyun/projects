sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"binding/databinding/model/models",
	"sap/ui/model/json/JSONModel",
], function (UIComponent, Device, models ,JSONModel ) {
	"use strict";

	return UIComponent.extend("binding.databinding.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// 1) component 모델 할당
			// component 모델 설정
			let oJsonCompoNamed = new JSONModel( {
				teststring : 'Binding 성공! _ 컴포넌트 Named 모델입니다.',
				testarray : [1,2,3],
				testobject : {
					key : "val"
				}
			} );

			let oJsonCompoDefault = new JSONModel( {
				teststring : 'Binding 성공! _ 컴포넌트 Default 모델입니다.',
				testarray : [1,2,3],
				testobject : {
					key : "val"
				}
			} );

			//컴포넌트는 this.setModel로 모델을 저장
			this.setModel(oJsonCompoNamed,'namedComponent');
			this.setModel( oJsonCompoDefault );
			
					
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});
