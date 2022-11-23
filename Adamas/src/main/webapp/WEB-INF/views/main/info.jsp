<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>my info</title>
<link rel="stylesheet" href="/resources/css/info.css" >
</head>
<body>
	<div class="myInfo_wrap">
		<!-- 로그인 -->
		<div class="my_wrap">
			<c:choose>
				<c:when test="${login.id == null or login.id == ''}">
					<a href="/member/login">로그인</a>
				</c:when>
				<c:otherwise>
					<form action="/member/logout" method="post">
						<input type="submit" value="로그아웃">
					</form>
				</c:otherwise>
			</c:choose>
		</div>
	</div>
</body>
</html>