"use strict";

var router = (()=> {
	return {move : x =>{
		console.log('router.move 클릭 테스트 성공 ${context}');
		location.href =
			x.context +"/" 
			+  x.domain 
			+ ".do?action=" + x.action
			+ "&page=" + x.page
	}};
})();

//5단계)JSON 사용(OOP)
var service = (()=>{
	return {
		nullChecker : x=>{
			var i = 0;
			var j ={
					checker : true,
					text : '필수항목 입력바랍니다'
			};
			for(i in x){
				if(x[i]===""){
					j.checker = false;
				}
			}
			return j;
		},
		//className에 사용
		addClass : (dom,cName)=>{
			var arr = cName.split(" ");
			if(arr.indexOf(cName)==-1){
				dom.className += " " + cName;
			}
		}
	};
})();

var common = (()=>{
	return{
		main : x=>{
			alert('컨텍스트 패스 : '+x);
			document.getElementById('moveToAdminMain').addEventListener('click',function(){
				var isAdmin = confirm('관리자입니까?');
				if(isAdmin){
					var password = prompt('관리자비번을 입력바랍니다');
					if(password == 1){
						router.move({
							context:x,
							domain:"admin",
							action:"search",
							page:"main"
						});
					}
				}else{
					alert('관리자만 접근이 허용됩니다');
				}
			});
		
		
		
		}
	}
})();

var admin=(()=>{   //생성자함수처럼 쓰이는 밖의 것은, 없는 것으로 막음. 디폴트와 같은 기능
	return {
		main : x=>{  
			service.addClass(
					document.getElementById('search_box'),
					'width80px center floatRight '
					);
			service.addClass(
					document.getElementById('search_word'),
					'width100px floatRight '
					);
			service.addClass(
					document.getElementById('search_btn'),
					'floatRight '//split때문에 끝에 띄어쓰기
					);
			service.addClass(
					document.getElementById('content_box_table'),
					'width90pt center marginTop30px '
					);
			service.addClass(
					document.getElementById('content_box_meta'),
					'bgColorYellow '
					);
			
			document.getElementById('search_btn').addEventListener('click',function(){
				var select = document.getElementById("search_box").value;
				alert(select);
				if(select==='userid'){
					location.href=x+'/admin.do?action=retrieve&page=member_detail&userid='
					+document.getElementById('search_word').value;
					alert('retrieve');
				}else{
					location.href=x+'/admin.do?action=search&page=main'+
							'&option='+document.getElementById("search_box").value+
							'&word='+document.getElementById('search_word').value;
					alert('search');
				}
			});

			for(var i of document.querySelectorAll('.username')){
				service.addClass(i,'cursor fontColorBlue');
				i.addEventListener('click',function(){
					location.href=x+'/member.do?action=retrieve&userid='+this.getAttribute('id');   //★★★★★★★
					/*&page=member_detail*/
				});
			};
	
			for(var i of document.querySelectorAll('.changeBlock')){
				service.addClass(i,'cursor fontColorBlue');
				i.addEventListener('click',function(){
					location.href =x+"/admin.do?action=search&pageNum="+this.getAttribute('id');
				});
			}
			
			for(var i of document.querySelectorAll('.pageNum')){
				service.addClass(i,'cursor fontColorBlue');
				i.addEventListener('click',function(){
					alert('pageNum'+this.getAttribute('id'));
					location.href=x+'/admin.do?action=search&pageNum='+this.getAttribute('id');
					/*&page=search*/
				});
			}; // jsp 에서는 for (i of object) 가 돌아가지 않습니다 ~_~ js파일로 옮겨주세용 !
			
			
			
			
			
			
			
			
			
			/*			if(document.getElementById('nextBlock')===null){}else{
							document.getElementById('nextBlock').addEventListener('click',function(){
								alert('다음▶ : '+(x.endPage*1+1));
								location.href=x.context+'/admin.do?action=list&page=main&pageNum='+(x.endPage*1+1);//JSON사용
							});
						};
						
						if(document.getElementById('preBlock')===null){}else{
							document.getElementById('preBlock').addEventListener('click',function(){
								alert('◀이전 : '+(x.beginPage*1-1));
								location.href=x.context+'/admin.do?action=list&page=main&pageNum='+(x.beginPage*1-1);
							});
						};*/
			//this 쓰려면 function(){} 으로 써야한다( ()=>{}이거는 node, AJAX에서 쓰이는 거라 안먹는다)
			
			//querySelectorAll은 클래스를 몽땅 뒤진다. 느림 (class이름을 줄때는 담기는 값이 많을때 쓰자)
			//하나만 부를거면 getAttribute
	
         }
};})();

var members = (()=>{
	return{
		main: x=>{
			
			
			//==== add =====
			
			
			//==== login =====
			/*
			document.getElementById('login_form_btn').addEventListener('click',function(){
				var form = document.getElementById('user-login-form');
				var x = service.nullChecker([ form.user_id.value, form.user_password.value ]);  
				if(x.checker){
					form.action = "${context}/member.do";  
					form.method = "post";
					var node = document.createElement('input');  //<input type="hidden" name="action" value="login"/>	
						node.setAttribute('type','hidden');
						node.setAttribute('name','action');
						node.setAttribute('value','login');
						form.appendChild(node);
						
						var node1 = document.createElement('input');  //<input type="hidden" name="action" value="login"/>	
						node1.setAttribute('type','hidden');
						node1.setAttribute('name','page');
						node1.setAttribute('value','retrieve');
						form.appendChild(node1);
					form.submit();
				}else {
					alert(x.text);
				}
			});
			*/
			//==== login =====
			
			
		}
	}
})();





var member = (()=> {
	var _userid, _ssn, _password, _name,
	_gender, _age, _roll, _teamid, _subject; // JS에서' _값 '  <-인스턴스 변수또는 인스턴스 메소드와 비슷(보안걸때 필요)
	
	var setUserid = (userid)=>{this._userid = userid;}
	var setSsn =(ssn)=> {this._ssn = ssn;}
	var setPassword = (password)=> {this._password = password;}
	var setName = (name)=> {this._name = name;}
	var setGender = x=>{
		var gender ="";
		var gen = Number(x[2].substr(-1));
		switch(gen){
		case 1: case 3: case 5: case 7:
			gender="남";
			alert('주민번호7번째:'+gen+'\n 남/여: '+gender);
			break;
		case 2: case 4: case 6: case 8:	
			gender ="여";
			alert('주민번호7번째:'+gen+'\n 남/여: '+gender);
			break;
		}
		this._gender=gender;
		}
	var setAge = x=>{
		var date = new Date();
		var birth = x[2].substr(0,2);  
		if(birth<19){
			var res="20"+birth;
			alert('2000년대생 '+res);
		}else{
			res="19"+birth;
			alert('1900년대생 '+res);
		}
		var age = Number(date.getFullYear() - res) +1;
		alert('올해는 :'+date.getFullYear()+'\n 계산한 나이는'+age);
		this._age=age;
	}
	var setRoll = (roll)=>{this._roll=roll;}
	var setTeamid =(teamid)=>{this._teamid=teamid;}
	var setProject = (project)=>{this._project=project;}
	
	var getUserid = ()=> {return this._userid;}
	var getSsn = ()=>{return this._ssn;}
	var getPassword = ()=> {return this._password;}
	var getName = ()=> {return this._name;}
	var getGender = ()=>{return this._gender;}
	var getAge = ()=>{return this._age;}
	var getRoll = ()=>{return this._roll;}
	var getTeamid = ()=>{return this._teamid;}
	var getProject = ()=>{return this._project;}
	
	return {
		setUserid:setUserid,
		setSsn:setSsn,
		setPassword:setPassword,
		setName:setName,
		setGender:setGender,
		setAge:setAge,
		setRoll:setRoll,
		setTeamid:setTeamid,
		setProject:setProject,
			
		getUserid:getUserid,
		getSsn:getSsn,
		getPassword:getPassword,
		getName:getName,
		getGender:getGender,
		getAge:getAge,
		getRoll:getRoll,
		getTeamid:getTeamid,
		getProject:getProject,
		
		join : x=>{
			member.setAge(x);
			member.setGender(x);
		}
	};
})();
	