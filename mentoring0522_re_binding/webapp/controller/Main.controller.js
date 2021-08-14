sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("student10.sap.training.mentoring0522rebinding.controller.Main", {
			onInit: function () {
				// let testObj = this.getOwnerComponent().getModel('testObj');		//this는 onInit을 가리키며, onInit의 testObj는 컴포넌트 불러와서 거기에서 testObj라는 모델 불러오기
				// this.getView().setModel(testObj, 'viewsetup');		//뷰를 불러와서 testObj 모델을 viewsetup이란 이름으로 넣기
				// 사실 모델을 컴포넌트에 달면 뷰를 다시 안걸어도 모든 뷰에서 실행가능하게 저장되어진다. 따라서 재사용하려면 컴포넌트에 달 것.


				// let testObjChange = this.getOwnerComponent().getModel('testObj');
				// testObjChange.setProperty('/name', testObjChange.getProperty('/name') + testObjChange.getProperty('/string'));
				// this.getView().setModel('testObjChange');
				// 이거는 원본 모델도 변경하는 코드

				// 이게 멘토님이 알려주신거. 원본 모델이 바뀌지 않게 새로운 모델을 파서 적용
				let compModel = this.getOwnerComponent().getModel('testObj');
				let stringName = compModel.getProperty('/name');
				stringName = stringName + '27';
				
				let newmodel = new JSONModel(
					{
						name : stringName
					}
				)
				this.getView().setModel(newmodel, "createModel");
			},
			onAfterRandering: function () {
				
			}
		});
	});
