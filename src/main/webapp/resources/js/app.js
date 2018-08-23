"use strict";
/* 엄격한 문법을 적용하시오
틀리면 에러 처리 하라는 명령어
*/

//Ecma6버전 (객체리터럴)   (이전버전: IIFE패턴)
var app = app || {}; //만약 app이 있으면 app쓰고 없으면 새로 만들어라, var는  전역
app = {//안드로이드, 노드의 핵심 코딩  
		init : x =>{
			console.log('step1');
			app.session.context(x);  //세션에 제일 먼저 경로 저장
			app.onCreate();//init에서 onCreate기능 생성
		},
		onCreate : ()=>{
			console.log('step 3 : ');
			app.setContentView();
			$('#login_btn').click(()=>{
				location.href = app.x()+'/move/auth/member/login';
			});
			$('#join_btn').click(()=>{
				location.href = app.x()+'/move/auth/member/add';
			});
			$('#login_submit').click(()=>{
				location.href = app.x()+'/member/login';
			});
			$('#join_submit').click(()=>{
				location.href = app.x();
			});
			$('#logout_btn').click(()=>{
				location.href = app.x()+'/member/logout';
			});

			
		},
		setContentView : ()=>{
			console.log('step 4 : '+app.j());
		}
};
app.session = {
		context : x=>{
			console.log('step 2 : '+x);
			sessionStorage.setItem('context',x);
			sessionStorage.setItem('js',x+'resources/js');
			sessionStorage.setItem('css',x+'resources/css');
			sessionStorage.setItem('img',x+'resources/img');
		},
		path : x=>{
			return sessionStorage.getItem(x);
			// 클로저 리턴 아니고, 클로저 내부에서 한번 더 리턴 하는 것.
		} 
};

//attaching property
app.x= ()=>{
	return app.session.path('context');
};
app.j= ()=>{
	return app.session.path('js');
};
app.c= ()=>{
	return app.session.path('css');
};
app.i= ()=>{
	return app.session.path('img');
};








