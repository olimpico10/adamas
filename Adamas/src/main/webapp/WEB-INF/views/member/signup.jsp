<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입 페이지</title>
<script src='https://code.jquery.com/jquery-3.3.1.min.js'></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
<script type="text/javascript" src="/resources/js/signup.js"></script>
<script type="text/javascript" src="/resources/js/datepicker.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css">
<link rel="stylesheet" href="/resources/css/datepicker.css" type="text/css">
</head>
<body>

	<a>ADAMAS</a>
	
	<!-- form태그를 통해 입력정보 보내기 -->
	<form action="/member/signup" method="post">
		<h3><label>아이디</label></h3>
		<span><input type="text" name="id" id="id" maxlength="20"></span>
		<span class="error_next_box" id="idMsg"></span>
		<h3><label>비밀번호</label></h3>
		<span><input type="password" name="password" id="pswd" maxlength="20"></span>
		<span class="error_next_box" id="pswdMsg"></span>
		<h3><label>비밀번호 재확인</label></h3>
		<span><input type="password" id="rePswd" maxlength="20"></span>
		<span class="error_next_box" id="rePswdMsg"></span>
		<h3><label>이름</label></h3>
		<span><input type="text" name="name" id="name" maxlength="10"></span>
		<span class="error_next_box" id="nameMsg"></span>
		<h3><label>닉네임</label></h3>
		<span><input type="text" name="nick" id="nick" maxlength="10"></span>
		<span class="error_next_box" id="nickMsg"></span>
		<h3><label>생년월일</label></h3>
		<input type="text" name="birth" class="birth" id="birth">
		<span class="error_next_box" id="birthMsg"></span>
		<h3><label>본인 확인 이메일</label></h3>
		<span><input type="text" name="email" id="email" maxlength="40"></span>
		<span class="error_next_box" id="emailMsg"></span>
		<h3><label>휴대전화</label></h3>
		<span><input type="text" name="phone" id="phone" maxlength="20"></span>
		<span class="error_next_box" id="phoneMsg"></span>
		<input type="submit" value="회원가입">
	</form>	
</body>
</html>