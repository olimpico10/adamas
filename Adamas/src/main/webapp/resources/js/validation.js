/**
 * 회원가입 관련 javascript 일단 생년월일 부분하고 이메일 부분 유효성 검사가 충분히 되지 않아도 가입이 되게 하자
 */


$(document).ready(function(){
	var idChk;
	var pswdChk;
	var rePswdChk;
	var nickChk;
	var birthChk;
	var emailChk;
	var phoneChk;	
	
	// 아이디 유효성 검사
	$("#id").on("blur",function(){
		var idReg = /^[a-z]+[a-z0-9-_]{4,19}$/g;
		
		if(idReg.test($("#id").val())){
			$("#idMsg").html("멋진 아이디네요!").css("color","green");
			idChk = 1;
		}else{
			$("#idMsg").html("5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.").css("color","red");
			idChk = 0;
		}
	})
	
	// 패스워드 유효성 검사
	$("#pswd").on("blur",function(){
		var pswdReg = /^(?=.*?[a-zA-Z])(?=.*?[~!@#$%^&*])(?=.*?[0-9]).{8,16}$/;
		
		if(pswdReg.test($("#pswd").val())){
			$("#pswdMsg").html("사용 할 수 있습니다!").css("color","green");
			pswdChk = 1;
		}else{
			$("#pswdMsg").html("8~16자 이내로 영문 대 소문자, 숫자, 특수문자를 다 포함하셔야 합니다").css("color","red");
			pswdChk = 0;
		}
	})
	
	// 패스워드 재확인 검사
	$("#rePswd").on("blur",function(){
		if($("#pswd").val()===$("#rePswd").val()){
			$("#rePswdMsg").html("일치합니다!").css("color","green");
			rePswdChk = 1;
		}else{
			$("#rePswdMsg").html("일치하지 않습니다.").css("color","red");
			rePswdChk = 0;
		}
	})
	
	// 이름 유효성 검사는 생략(이름이 생각보다 다양하다. 그리고 Adamas에서는 이름이 중요하지 않다)
	// 향후 결제가 추가 됐을 때 개인정보 일치해야 하면 이 부분은 수정하기로 한다.
	$("#name").on("blur",function(){
		if($("#name").val()!=""){
			$("#nameMsg").html("").css("color","green");
			nameChk = 1;
		}
	})
	
	// 닉네임 유효성 검사
	$("#nick").on("blur",function(){
		var nameReg = /^[가-힣]{2,6}$/;
		
		if(nameReg.test($("#nick").val())){
			$("#nickMsg").html("사용 가능합니다!").css("color","green");
			nickChk = 1;
		}else{
			$("#nickMsg").html("한글(2~6글자까지만) 사용가능합니다.").css("color","red");
			nickChk = 0;
		}
	})
	
	/* 이 부분도 마찬가지로 중요하지 않아서 생략
	// 생년월일 유효성 검사
	$("#birth").on("blur",function(){
		var birthReg = /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
		var birthValue = parseInt($("#birth").val());
		alert(birthValue)
		if(birthReg.test(birthValue)){
			$("#birthMsg").html("").css("color","green");
			birthChk = 1;
		}else{
			$("#birthMsg").html("유효한 생년월일을 입력해 주세요.").css("color","red");
			birthChk = 0;
		}
	})
	*/
	$("html").click(function(e){
		if(!$(e.target).hasClass("birth")){
			if($("#birth").val()!=""){
			$("#birthMsg").html("").css("color","green");
			birthChk = 1;
		}
		}
	})

	
	// 이메일 유효성 검사는 나중에 본인확인 이메일 받기로 대체한다.
	$("#email").on("blur",function(){
		if($("#email").val()!=""){
			$("#emailMsg").html("").css("color","green");
			emailChk = 1;
		}
	})
	
	// 휴대전화 유효성 검사
	$("#phone").on("blur",function(){
		var phoneReg = /01[016789]-[^0][0-9]{2,3}-[0-9]{3,4}/;
		
		if(phoneReg.test($("#phone").val())){
			$("#phoneMsg").html("").css("color","green");
			phoneChk = 1;
		}else{
			$("#phoneMsg").html("01x-xxxx-xxxx 형식으로 써주세요.").css("color","red");
			phoneChk = 0;
		}
	})
	
	// form태그의 값을 서버로 submit했을 때
	$("form").on("submit",function(){
		// 아이디 입력 여부 체크
		if($("#id").val()==""){
			$("#idMsg").html("필수 정보입니다").css("color","red");
			idChk = 0;
			//return false;
		}
		
		// 비밀번호 입력 여부 체쿠
		if($("#pswd").val()==""){
			$("#pswdMsg").html("필수 정보입니다").css("color","red");
			pswdChk = 0;
			//return false;
		}
		
		// 비밀번호 재확인 입력 여부 체쿠
		if($("#rePswd").val()==""){
			$("#rePswdMsg").html("필수 정보입니다").css("color","red");
			rePswdChk = 0;
			//return false;
		}
		
		// 이름 입력 여부 체쿠
		if($("#name").val()==""){
			$("#nameMsg").html("필수 정보입니다").css("color","red");
			nameChk = 0;
			//return false;
		}
		
		// 닉네임 입력 여부 체쿠
		if($("#nick").val()==""){
			$("#nickMsg").html("필수 정보입니다").css("color","red");
			nickChk = 0;
			//return false;
		}
		
		// 생년월일 입력 여부 체쿠
		if($("#birth").val()==""){
			$("#birthMsg").html("필수 정보입니다").css("color","red");
			birthChk = 0;
			//return false;
		}
		
		// 이메일 입력 여부 체쿠
		if($("#email").val()==""){
			$("#emailMsg").html("필수 정보입니다").css("color","red");
			emailChk = 0;
			//return false;
		}
		
		// 휴대전화 입력 여부 체쿠
		if($("#phone").val()==""){
			$("#phoneMsg").html("필수 정보입니다").css("color","red");
			phoneChk = 0;
			//return false;
		}
		
		if(idChk*pswdChk*rePswdChk*nameChk*nickChk*birthChk*emailChk*phoneChk!=1){
			return false;
		}
	})

})