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
</head>
<body>
	<h1>내 번호 당첨결과</h1>
	<input type="text" id="loginId" value="${login.id}">
	<!-- 내가 저장한 번호 불러오는 영역 -->
	<div>
		<p>내 번호 당첨확인</p>
		<ul class="mylotto">
		</ul>
	</div>
	<!-- 선택 한 번호 결과확인 하는 -->
	<div>
		<p>로또 번호 당첨확인</p>
		<p>위에 조합번호를 선택하시면 최근 1년 이내 당첨된 모든 결과를 알려드립니다.</p>
		<table border="1">
			<tr>
				<td id="ball1">ball1</td>
				<td id="ball2">ball2</td>
				<td id="ball3">ball3</td>
				<td id="ball4">ball4</td>
				<td id="ball5">ball5</td>
				<td id="ball6">ball6</td>
			</tr>
		</table>	
	</div>
	<div>
		<ul class="historyCompare">
		</ul>
	</div>
</body>
</html>