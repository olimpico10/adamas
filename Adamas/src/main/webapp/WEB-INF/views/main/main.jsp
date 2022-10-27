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
	<div class="wrap">
		<%@ include file="header.jsp"%>
		<!-- 임시로 로그인이 됐나 확인 하기 위해... 나중에 지우자 -->
		<p>${login}</p>
		<p>콘테이너wrap</p>
		
		<div class="container_wrap">
		
		</div>

		<!-- 번호생성기 -->
		<a href="/lotto/generator">직접생성(번호생성기)</a>
		<a href="/lotto/randomGenerator">랜덤생성(번호생성기)</a>
		
		
		<!-- 번호분석 -->
		<a href="/lotto/number">번호분석..구상만 해 놓음(번호분석)</a>
		<a href="/gameResult">당첨결과(번호분석)</a>
		<a href="/myGameResult">내 당첨결과(번호분석)</a>
		
		
		<!-- 판매점 -->
		<a href="/store/sellerInfo">판매점찾기(로또판매점)</a>
		<a href="/store/topStore">당첨판매점(로또판매점)</a>
		<a href="/store/map">판매점 위치보기(로또판매점)</a>
		
		
		<!-- 기타 -->
		<a href="/board">커뮤니티</a>
		
		<!-- 임시로 글쓰기 페이지 연결 -->
		<a href="/board/write">글쓰기 페이지</a>
		
		<!-- 임시로 리스트 페이지 연결 -->
		<a href="/board/list">리스트 페이지</a>
	
	</div>


</body>
</html>