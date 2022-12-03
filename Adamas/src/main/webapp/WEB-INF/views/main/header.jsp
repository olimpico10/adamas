<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>헤더</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/header.js"></script>
<link rel="stylesheet" href="/resources/css/header.css" >
</head>
<body>
	<div class="header_wrap">
		<div class="logo_wrap">
			<h1><a href="/">ADAMAS</a></h1>
		</div>
		<div class="nav_wrap">
			<div>
				<span class="normal" id="genratorSpan">번호생성</span>
				<ul class="navUl" id="generator">
					<li><a href="/lotto/generator">직접생성(번호생성기)</a></li>
					<li><a href="/lotto/randomGenerator">랜덤생성(번호생성기)</a></li>
				</ul>
			</div>
			<div>
				<span class="normal" id="resultSpan">당첨결과</span>
				<ul class="navUl" id="result">
					<li><a href="/gameResult">당첨결과(번호분석)</a></li>
					<li><a href="/myGameResult">내 당첨결과(번호분석)</a></li>
				</ul>
			</div>
			<div>
				<span class="normal" id="storeSpan">로또판매점</span>
				<ul class="navUl" id="store">
					<li><a href="/store/sellerInfo">판매점찾기(로또판매점)</a></li>
					<li><a href="/store/topStore">당첨판매점(로또판매점)</a></li>
				</ul>
			</div>
			<div>
				<span class="normal" id="boardSpan">게시판</span>
				<ul class="navUl" id="board">
					<li><a href="/board/list">게시글 목록</a></li>
					<li><a href="/board/write">글쓰기</a></li>
				</ul>
			</div>
			<!--  
			<ul class="navUl">
				<li class="navLi"><a href="/lotto/generator">직접생성(번호생성기)</a></li>
				<li class="navLi"><a href="/gameResult">당첨결과(번호분석)</a></li>
				<li class="navLi"><a href="/store/sellerInfo">판매점찾기(로또판매점)</a></li>
				<li class="navLi"><a href="/board/list">리스트 페이지</a></li>
			</ul>
			-->			
		</div>
	</div>
</body>
</html>