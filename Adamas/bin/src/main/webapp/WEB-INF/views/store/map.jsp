<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>판매점 위치보기</title>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=fddc2d2cfefa12ba0508cf1a304bd43e&libraries=services"></script>
<script type="text/javascript" src="/resources/js/map.js"></script>
<link rel="stylesheet" href="/resources/css/map.css" >
</head>
<body>
	<h1>${store.sname}</h1>
	<input type="hidden" id="slocation" value="${store.location}">
	<input type="hidden" id="sname" value="${store.sname}">
	<!-- 지도를 표시할 div 입니다 -->
	<div id="map" style="width:100%;height:500px;"></div>
	
</body>
</html>