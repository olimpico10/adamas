<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 페이지</title>
</head>
<body>
	
	<table border="1">
		<tr>
			<td>글번호</td><td>ID</td><td>닉네임</td><td>카테고리</td><td>제목</td><td>작성일시</td><td>조회수</td>
		</tr>
		<c:forEach items="${list}" var="list">
			<tr>
				<td>${list.bno}</td>
				<td>${list.id}</td>
				<td>${list.nick}</td>
				<td>${list.category}</td>
				<td><a href="/board/detail?bno=${list.bno}">${list.title}</a></td>
				<td>${list.regdate}</td>
				<td>${list.cnt}</td>
			</tr>
		</c:forEach>
	</table>

</body>
</html>