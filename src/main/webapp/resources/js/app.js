"use strict";
/* 엄격한 문법을 적용하시오
틀리면 에러 처리 하라는 명령어
*/



//Ecma6버전 (객체리터럴)   (이전버전: IIFE패턴)
var app = app || {}; //만약 app이 있으면 app쓰고 없으면 새로 만들어라, var는  전역
app = {//안드로이드, 노드의 핵심 코딩  
		init : x =>{
			alert('step1');
			app.session.context(x);  //세션에 제일 먼저 경로 저장
			app.onCreate();//init에서 onCreate기능 생성
		},
		onCreate : ()=>{
			alert('step 3 : ');
			app.setContentView();
		},
		setContentView : ()=>{
			alert('step 4 : '+app.session.path('js'));
		}
};
app.session = {
		context : x=>{
			alert('step 2 : '+x);
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






