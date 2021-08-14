sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel,ODataModel) {
		"use strict";

		return Controller.extend("binding.databinding.controller.View1", {
			onAfterRendering : function (params) {
				// 화면이 랜더링 되고 나서 자동 호출되는 후크 메소드
				debugger;
				let oJsonAddedTest = 	new JSONModel( {
					teststring : 'NEW SET 성공!',
					testarray : [1,2,3],
					testobject : {
						key : "val"
					}
				} );

				//onInit을 지난 시점이기 때문에 getOwnerComponent 말고 getView().getModel()로 접근 가능
				console.log("named 컴포넌트에서 등록한 모델",this.getView().getModel("namedComponent").oData);
				
				// 컴포넌트에 모델을 추가(다른 뷰에서 사용 가능)
				this.getOwnerComponent().setModel(oJsonAddedTest,"addedComponent");

			},
			onInit: function () {
				// A) 모델 선언
				// model 은 크게 2가지
				
				// json 모델 , oData 모델 
				// json은 브라우저에서 사용할 객체나 배열을 객체의 키 프로퍼티 형태로 저장(클라이언트 사이드 모델)
				let oJsonCoreNamed = 	new JSONModel( {
					teststring : 'Binding 성공! _ Core Named 모델입니다.',
					testarray : [1,2,3],
					testobject : {
						key : "val"
					}
				} );

				let oJsonCoreDefault = 	new JSONModel( {
					teststring : 'Binding 성공! _ Core Default 모델입니다.',
					testarray : [1,2,3],
					testobject : {
						key : "val"
					}
				} );
				
				let oJsonViewNamed = 	new JSONModel( {
					teststring : 'Binding 성공! _ View Named 모델입니다.',
					testarray : [4,5,6],
					testobject : {
						key : "val2"
					}
				} );

				let oJsonViewDefault = 	new JSONModel( {
					teststring : 'Binding 성공! _ View Default 모델입니다.',
					testarray : [4,5,6],
					testobject : {
						key : "val2"
					}
				} );
				
				let oJsonControlNamed = 	new JSONModel( {
					teststring : 'Binding 성공! _ Control Named 모델입니다.',
					testarray : [4,5,6],
					testobject : {
						key : "val2"
					}
				} );

				let oJsonControlDefault = 	new JSONModel( {
					teststring : 'Binding 성공! _ Control Default 모델입니다.',
					testarray : [4,5,6],
					testobject : {
						key : "val2"
					}
				} );

				// json 모델의 프로퍼티를 변경하고 싶으면 setProperty( ), 
				// json 모델의 특정 모델을 다른 변수에 할당하고 싶으면 getProporty( ) 참고

				// oData 모델은 백앤드 서버에서 데이터를 가져오거나 데이터를 보냄(서버 사이드 모델)
				// 이 모델은 나중에 실습을 통해 추가로 공부하세요.. 백앤드와 연관되어 있고 우린 일단 클라이언트 사이드 모델
				// 위주로 테스트 ㄱㄱ
                let oDataTest = new ODataModel("/sap/opu/odata/sap/ZPWK_APP1_SRV", {
                    defaultUpdateMethod: sap.ui.model.odata.UpdateMethod.Put
                });
				
				// B) 모델 할당 
				// 선언된 모델은 core에 할당하거나 View에 할당하거나 , 아님 특정 컨트롤에 할당할 수 있습니다.
				
				// 1) component 모델 할당 !!!!!!!!!!!!!
				// Component.js 파일의 init 참조 !!!!!!!!!!!!!!!

				// 가장 먼저 생성되는 모델
				// Component 의 init말고 MANIFEST 에 정의되어 있으면 앱이 초기화 되는 과정에서
				// 자동으로 선언되고 할당됨 ,  MANIFEST에서 > "preloadModel" 이라는 이름으로 찾기를 실행해보면
				// 앱이 초기화하는 과정에서 자동 선언될 모델을 확인할 수 있음
				// 해당 모델은  /sap/opu/odata/sap/ZBC_TRAVEL_SRV 서비스를 이용하는 oData 모델임(서버 사이드 모델)
				// 서버 사이드 모델은 기술했듯 나중에 공부할거고..그냥 이런게 있다고만 보세요~
				// 그 외 component js에서 직접 선언하고 할당한 namedComponent 와 디폴트 모델도 확인 가능

				// 중요!!----
				// 이 컴포넌트에서 선언된 모델은 파일 로드되는 시점의 문제로 인해 onInit 메소드에서는
				// getOwnerComponent() 를 통해 getModel 해야하지만
				// onInit 메소드가 끝나고 난 이후엔 view에 자동으로 
				console.log("매니패스트에서 설정한 백앤드 서비스용 oDATA" , this.getOwnerComponent().getModel("namedManifest"));
				console.log("컴포넌트 js에서 set 한 named 모델" , this.getOwnerComponent().getModel("namedComponent").oData);
				console.log("컴포넌트 js에서 set 한 default 모델" , this.getOwnerComponent().getModel( ).oData);								

				// 2) core에 할당
				// 여러 샘플 소스를 보면 sap.ui.getCore() 를 통해 프레임워크 코어를 얻고 거기에 model을 할당하기도 합니다.
				// 중요!!----
				// 하지만 이 방법은  component.js를 통해 로드하는 방식으로 개발하는(즉 현재 템플릿인 Component-based 형태) 기반이면 제대로 바인딩 되지 않습니다.
				// component js 파일이 있고 부트스트랩시 ComponentSupport로 로드하여  UIComponent 를 사용하지 "않는" 경우만 사용하세요!
				// 즉 컴포넌트 베이스드 앱이면 컴포넌트에 공통 모델을 set합니다.

				// 관련 내용인 앱 개발 베스트 프렉티스는 다음을 확인하세요 
				//  a) (https://help.sap.com/viewer/a7b390faab1140c087b8926571e942b7/202009.001/en-US/88681e71e3584497908a30767d28ac78.html)
				
				// 이름을 정의하면 네임드 모델이 됩니다. 해당 모델의 데이터를 바인딩하거나 get 하려면 이름을 명시해줘야 합니다. 
				sap.ui.getCore().setModel(oJsonCoreNamed ,"namedCore");
				// 이름 없이 할당하면 default model이 됩니다. 데이터 바인딩, 데이터를 getModel 해오거나 할때 이름을 할당 안하면 기본적으로 가져오는 모델이 됩니다.
				sap.ui.getCore().setModel(oJsonCoreDefault);


				// 3) view에 할당(해당 뷰에서만 모델을 바인딩하고 쓸 수 있음)
				// 이름을 정의하면 네임드 모델이 됩니다. 해당 모델의 데이터를 바인딩하거나 get 하려면 이름을 명시해줘야 합니다. 
				this.getView().setModel(oJsonViewNamed,"namedView1");
				// 이름 없이 할당하면 default model이 됩니다. 데이터 바인딩, 데이터를 getModel 해오거나 할때 이름을 할당 안하면 기본적으로 가져오는 모델이 됩니다.
				this.getView().setModel(oJsonViewDefault);

				// 4) 컨트롤에 할당(해당 화면 요소에만 바인딩할 수 있음)
				// 화면의 컨트롤을 byId로 불러와서 직접 모델을 바인딩 해준다.
				let titleNamed = this.getView().byId("tileIdNamed");
				let titleDefault = this.getView().byId("tileIdDefault");
				titleNamed.setModel(oJsonControlNamed,"namedControll");
				titleDefault.setModel(oJsonControlDefault);

				//5) programmatically binding

				// view에서 중괄호로 바인딩 하는게 아니라 bindPropoerty 메소드를 이용하는 방법
				// 해당 컨트롤의 id를 얻어오고 bindProperty로 바인딩한다.
				
				let tileProgrammaticallyNamed = this.getView().byId("tileIdJSNamed");
				// 특정 모델을 명시해서 바인딩 하는 경우 두 번째 파라미터를 object 형태로 model을 명시한다.
				tileProgrammaticallyNamed.bindProperty("subheader",
					{
						path : "/teststring" ,
						model : "namedView1"
					}
				);

				let tileProgrammaticallyDefault = this.getView().byId("tileIdJSDefault");
				// 모델을 명시하지 않으면 view에 set되어진 디폴트 모델이 바인딩 된다.
				tileProgrammaticallyDefault.bindProperty("subheader" , "/teststring");
			}
		});
	});
