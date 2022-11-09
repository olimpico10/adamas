<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>내 번호 당첨결과</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/myResult.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/myGameResult.css" >
</head>
<body>
	<div class="wrap">
		<div class="leftContent_wrap">
			<!-- 헤더 -->
			<%@ include file="../main/header.jsp"%>				
		</div>
		<div class="rightContent_wrap">
			<!-- myInfo -->
			<%@ include file="../main/info.jsp"%>		
		
			<div class="content">
				<div class="content_title">
					<h1>내 번호 당첨결과</h1>
					<input type="hidden" id="loginId" value="${login.id}">
				</div>
				<!-- 내가 저장한 번호 불러오는 영역 -->
				<div class="mylotto_wrap">
					<div class="table_wrap">
						<table class="mylotto">
						</table>
					</div>
				</div>
				<div class="mylotto_paging">
					<ul id="myPaging">
					</ul>
				</div>
				<hr>
				<!-- 선택 한 번호 결과확인 하는 -->
				<div class="mylotto_winning">
					<div>
						<p>선택 번호 당첨확인</p>
						<p>위에 조합번호를 선택하시면 최근 1년 이내 당첨된 모든 결과를 알려드립니다.</p>				
					</div>
					<div class="wtable_wrap">
						<table class="selected_ball">
						</table>
						<table class="winning">
						</table>
					</div>
					<div>
						<ul class="historyCompare">
						</ul>
					</div>
				</div>

			</div>
		</div>
	</div>
</body>
</html>