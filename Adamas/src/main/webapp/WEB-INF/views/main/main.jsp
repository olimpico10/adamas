<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ADAMAS</title>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/main.css" >
</head>
<body>
	<%@ include file="header.jsp"%>
	<div>
		<!-- 임시로 로그인이 됐나 확인 하기 위해... 나중에 지우자 -->
		<p>${login}</p>
	</div>

	<!-- 번호생성기 -->
	<a href="/lotto/generator">번호생성기</a>
	
	<!-- 랜덤 발생기 -->
	<a href="/lotto/randomGenerator">랜덤발생기</a>
	
	<!-- 번호분석 -->
	<a href="/lotto/number">번호분석</a>
	
	<!-- 당첨 결과 -->
	<a href="/winning">당첨결과</a>
	
	<!-- 판매점 -->
	<a href="/site">판매점</a>
	
	<!-- 기타 -->
	<a href="/board">커뮤니티</a>
	
	<!-- 임시로 글쓰기 페이지 연결 -->
	<a href="/board/write">글쓰기 페이지</a>
	
	<!-- 임시로 리스트 페이지 연결 -->
	<a href="/board/list">리스트 페이지</a>
</body>
</html>