<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상세 페이지</title>
</head>
<body>
	<form method="post">
		<input type="hidden" name="bno" value="${detail.bno}" readonly>
		<table border="1">
			<tr>
				<td>제목</td>
				<td><input type="text" name="title" value="${detail.title}" readonly></td>
			</tr>
			<tr>
				<td>내용</td>
				<td>${detail.content}</td>
			</tr>
		</table>
		<a href="/board/modify?bno=${detail.bno}">수정하기</a>
		<input type="submit" value="삭제" formaction="/board/remove">	
	</form>

</body>
</html>