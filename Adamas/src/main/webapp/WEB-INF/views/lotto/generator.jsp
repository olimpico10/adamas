<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>번호발생기</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/generator.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/ball.css" >
<link rel="stylesheet" href="/resources/css/generator.css" >
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
					<h1>직접생성</h1>
				</div>
				<div class="content_checked">
					<div class="checkedNum_wrap">
						<input type="hidden" id="loginId" name="id" value="${login.id}" readonly><br>
						<ul class="checkedNum"></ul><br>
					</div>
					<div class="button_wrap">
						<button type="button" id="reset">초기화</button>
						<button type="button" id="storage">저장</button><br>				
					</div>
				</div>
				<div class="content_num">
					<div class="num_wrap">
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
					<div class="historyButton_wrap">	
						<!-- 과거순위 보기 -->
						<button id="history">과거순위보기</button>
					</div>
				</div>							
			</div>				
		</div>	
	</div>
</body>
</html>