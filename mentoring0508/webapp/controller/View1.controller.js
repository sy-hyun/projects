sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("mentoring0508.controller.View1", {
			onInit: function () {
			},
			onButtonbasic1: function () {
			   alert('원시 타입 주요한 5가지를 알아봅시다.');
			   
			   // var var1 = 'test';
			   // var var2 = 2;
   
			   console.log();
			   
			   let varh =1;
			   let vari =1;
   
			   if(varh === vari){
				  console.log(varh+vari);
			   };
			   
			   if(varh>vari){
				  console.log(true);
			   } else{
				  console.log(false);
			   }
			},
			onButtonbasic2: function () {
			   alert("test 입니다.");
			   
			   let i=0;
			   while(i<5){
				  console.log(i);
				  i++;
			   };
			   
			   for(let index = 0; index <10; index++){
				  console.log(index);
			   }
			},
			onButtonNav: function () {
				let oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("ExternalView1");
			}
		});
		
	}
);
