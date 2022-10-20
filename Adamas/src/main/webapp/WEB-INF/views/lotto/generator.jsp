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
</head>
<body>
	<h1>직접생성</h1>
	<div class="checkedNum_wrap">
		<input type="hidden" id="loginId" name="id" value="${login.id}" readonly><br>
		<ul class="checkedNum"></ul><br>
		<button type="button" id="reset">초기화</button>
		<button type="button" id="storage">저장</button><br>
	</div>
	<div>

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
		<!-- 과거순위 보기 -->
		<button id="history">과거순위보기</button>
	</div>

		<!-- 이 밑에거는 반복되는 거니까 for문을 돌리자 --><!-- 	
		<input type="checkbox" class="chkNum" id="ball1" value="1"><label for="ball1"></label>
		<input type="checkbox" class="chkNum" id="ball2" value="2"><label for="ball2"></label>
		<input type="checkbox" class="chkNum" id="ball3" value="3"><label for="ball3"></label>
		<input type="checkbox" class="chkNum" id="ball4" value="4"><label for="ball4"></label>
		<input type="checkbox" class="chkNum" id="ball5" value="5"><label for="ball5"></label>
		<input type="checkbox" class="chkNum" id="ball6" value="6"><label for="ball6"></label>
		<input type="checkbox" class="chkNum" id="ball7" value="7"><label for="ball7"></label>
		<input type="checkbox" class="chkNum" id="ball8" value="8"><label for="ball8"></label>
		<input type="checkbox" class="chkNum" id="ball9" value="9"><label for="ball9"></label>
		<input type="checkbox" class="chkNum" id="ball10" value="10"><label for="ball10"></label> <br>
		<input type="checkbox" class="chkNum" id="ball11" value="11"><label for="ball11"></label>
		<input type="checkbox" class="chkNum" id="ball12" value="12"><label for="ball12"></label>
		<input type="checkbox" class="chkNum" id="ball13" value="13"><label for="ball13"></label>
		<input type="checkbox" class="chkNum" id="ball14" value="14"><label for="ball14"></label>
		<input type="checkbox" class="chkNum" id="ball15" value="15"><label for="ball15"></label>
		<input type="checkbox" class="chkNum" id="ball16" value="16"><label for="ball16"></label>
		<input type="checkbox" class="chkNum" id="ball17" value="17"><label for="ball17"></label>
		<input type="checkbox" class="chkNum" id="ball18" value="18"><label for="ball18"></label>
		<input type="checkbox" class="chkNum" id="ball19" value="19"><label for="ball19"></label>
		<input type="checkbox" class="chkNum" id="ball20" value="20"><label for="ball20"></label> <br>
		<input type="checkbox" class="chkNum" id="ball21" value="21"><label for="ball21"></label>
		<input type="checkbox" class="chkNum" id="ball22" value="22"><label for="ball22"></label>
		<input type="checkbox" class="chkNum" id="ball23" value="23"><label for="ball23"></label>
		<input type="checkbox" class="chkNum" id="ball24" value="24"><label for="ball24"></label>
		<input type="checkbox" class="chkNum" id="ball25" value="25"><label for="ball25"></label>
		<input type="checkbox" class="chkNum" id="ball26" value="26"><label for="ball26"></label>
		<input type="checkbox" class="chkNum" id="ball27" value="27"><label for="ball27"></label>
		<input type="checkbox" class="chkNum" id="ball28" value="28"><label for="ball28"></label>
		<input type="checkbox" class="chkNum" id="ball29" value="29"><label for="ball29"></label>
		<input type="checkbox" class="chkNum" id="ball30" value="30"><label for="ball30"></label> <br>
		<input type="checkbox" class="chkNum" id="ball31" value="31"><label for="ball31"></label>
		<input type="checkbox" class="chkNum" id="ball32" value="32"><label for="ball32"></label>
		<input type="checkbox" class="chkNum" id="ball33" value="33"><label for="ball33"></label>
		<input type="checkbox" class="chkNum" id="ball34" value="34"><label for="ball34"></label>
		<input type="checkbox" class="chkNum" id="ball35" value="35"><label for="ball35"></label>
		<input type="checkbox" class="chkNum" id="ball36" value="36"><label for="ball36"></label>
		<input type="checkbox" class="chkNum" id="ball37" value="37"><label for="ball37"></label>
		<input type="checkbox" class="chkNum" id="ball38" value="38"><label for="ball38"></label>
		<input type="checkbox" class="chkNum" id="ball39" value="39"><label for="ball39"></label>
		<input type="checkbox" class="chkNum" id="ball40" value="40"><label for="ball40"></label> <br>
		<input type="checkbox" class="chkNum" id="ball41" value="41"><label for="ball41"></label>
		<input type="checkbox" class="chkNum" id="ball42" value="42"><label for="ball42"></label>
		<input type="checkbox" class="chkNum" id="ball43" value="43"><label for="ball43"></label>
		<input type="checkbox" class="chkNum" id="ball44" value="44"><label for="ball44"></label>
		<input type="checkbox" class="chkNum" id="ball45" value="45"><label for="ball45"></label> <br>
		 -->
	
</body>
</html>