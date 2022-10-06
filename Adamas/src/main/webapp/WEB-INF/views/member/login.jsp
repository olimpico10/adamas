<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인 페이지</title>
</head>
<body>
	<div id="wrap" class="wrap">
		<div class="header">
		</div>
		<div class="container"></div>
		<div class="footer"></div>	
	</div>
	
	<a>ADAMAS</a>
	
	<!-- 로그인 방식 일단 한개, 가능하면 QR코드까지 해보자 -->
	<ul>
		<li>ID 로그인</li>
	</ul>
	
	<!-- form태그를 통해 아이디와 비밀번호 보내기 -->
	<form action="/member/login" method="post">
		<input type="text" name="id" placeholder="아이디">
		<input type="password" name="password" placeholder="비밀번호">
		<input type="submit" value="로그인">
	</form>
	
	<!-- a태그를 통해 비밀번호 찾기/ 아이디 찾기/ 회원가입 페이지 -->
	<a>비밀번호 찾기</a>
	<a>아이디 찾기</a>
	<a href="/member/signup">회원가입 페이지</a>
</body>
</html>