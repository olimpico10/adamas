<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>당첨 판매점</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/topStore.js"></script>
<script type="text/javascript" src="/resources/js/header.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/topStore.css" >
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
					<h1>1등 당첨 판매점</h1>
				</div>
				<div class="select_wrap">
					<span id="selectedlno">최신</span>
					<ul class="selectlno">
					</ul>
				</div>
				<div class="storeList_wrap">
					<table class="storeList">
					</table>
				</div>
			</div>		
		</div>
	</div>
</body>
</html>