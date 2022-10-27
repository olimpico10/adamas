<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상단</title>
<link rel="stylesheet" href="/resources/css/header.css" >
</head>
<body>
	<div class="header">
		<div class="logo_wrap">
			<h1>ADAMAS</h1>
		</div>
		<div class="my_wrap">
			<c:choose>
				<c:when test="${login.id == null or login.id == ''}">
					<a href="/member/login">로그인</a>
				</c:when>
				<c:otherwise>
					<form action="member/logout" method="post">
						<input type="submit" value="로그아웃">
					</form>
				</c:otherwise>
			</c:choose>
		</div>
	</div>
	<div class="nav_wrap">
		<div class="adamasNav">
			<ul>
				<li><a href="/lotto/generator">직접생성(번호생성기)</a></li>
				<li><a href="/gameResult">당첨결과(번호분석)</a></li>
				<li><a href="/store/sellerInfo">판매점찾기(로또판매점)</a></li>
				<li><a href="/board/list">리스트 페이지</a></li>
			</ul>			
		</div>
	</div>
</body>
</html>