<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>랜덤 발생기</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/randomGenerator.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/ball.css" >
<link rel="stylesheet" href="/resources/css/randomGenerator.css" >
</head>
<body>
	<h1>랜덤발생기</h1>
	<div class="checkedNum_wrap">
		<ul class="checkedNum" id="fixedNum"></ul><br>
		<ul class="checkedNum" id="excludedNum"></ul><br>
	</div>
	<div>
		<button class="chkBtn" id="fixedBtn">고정수</button>
		<button class="chkBtn" id="excludedBtn">제외수</button>
		<button id="reset">초기화</button><br>
		<c:forEach var="i" begin="1" end="45">
			<input type="checkbox" class="chkNum" id="ball${i}" value="${i}"><label for="ball${i}"></label>
			<c:choose>
				<c:when test="${i%10 == 0}">
					<br>
				</c:when>
				<c:when test="${i%45 == 0}">
					<br>
				</c:when>
			</c:choose>
		</c:forEach>
	</div>
	<div>
		<button id="action">번호생성</button>
		<ul class="checkedNum" id="lotto"></ul><br>
	</div>
	<div>
		<label>저장</label>
		<!-- 과거순위 보기 -->
		<button id="history">과거순위보기</button>
	</div>
</body>
</html>