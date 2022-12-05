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
<script type="text/javascript" src="/resources/js/header.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/ball.css" >
<link rel="stylesheet" href="/resources/css/randomGenerator.css" >
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
					<h1>랜덤발생기</h1>
				</div>
				<div class="content_lotto">
					<div class="lottoNum">
						<ul class="checkedNum" id="lotto"></ul><br>
					</div>
					<div class="lottoNum_button">
						<button type="button" id="storage">저장</button>
						<!-- 과거순위 보기 -->
						<button id="history">과거순위보기</button>
					</div>
				</div>
				<div class="content_num">
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
				<div class="button_wrap">
					<input type="hidden" id="loginId" name="id" value="${login.id}" readonly>
					<button class="chkBtn" id="fixedBtn">고정수</button>
					<button class="chkBtn" id="excludedBtn">제외수</button>
					<button id="reset">초기화</button>
					<button type="button" id="action">번호생성</button>
				</div>
				<div class="content_checked">
					<div class="checkedFix">
						<ul class="checkedNum" id="fixedNum"></ul>
					</div>
					<div class="checkedExclude">
						<ul class="checkedNum" id="excludedNum"></ul>
					</div>
				</div>
			</div>		
		</div>
	</div>
</body>
</html>