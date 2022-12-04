<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>과거 순위보기</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/compare.js"></script>
<link rel="stylesheet" href="/resources/css/compare.css" >
</head>
<body>
	<h1>과거순위 보기</h1>
	<input type="text" value="${lotto.geBall1}" id="geBall1" readonly>
	<input type="text" value="${lotto.geBall2}" id="geBall2" readonly>
	<input type="text" value="${lotto.geBall3}" id="geBall3" readonly>
	<input type="text" value="${lotto.geBall4}" id="geBall4" readonly>
	<input type="text" value="${lotto.geBall5}" id="geBall5" readonly>
	<input type="text" value="${lotto.geBall6}" id="geBall6" readonly>
	<label>지금 뽑은 번호의 과거순위</label>
	<div class="compare_wrap">
		<ul class="compare">
		</ul>
	</div>
</body>
</html>