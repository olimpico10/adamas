<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ADAMAS</title>
</head>
<body>

	<!-- 임시로 로그인이 됐나 확인 하기 위해... 나중에 지우자 -->
	<p>${login}</p>
	
	<!-- 로그인 페이지로 연결 -->
	<a href="/member/login">로그인</a>
	
	<!-- 로그인 되었을 때 로그아웃 버튼 노출 -->
	<c:if test="${login.id != null}">
		<form action="member/logout" method="post">
			<input type="submit" value="로그아웃">
		</form>
	</c:if>	
	
	<!-- 임시로 글쓰기 페이지 연결 -->
	<a href="/board/write">글쓰기 페이지</a>
</body>
</html>