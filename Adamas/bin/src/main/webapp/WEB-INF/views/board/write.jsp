<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head >
<meta charset="UTF-8">
<title>글쓰기</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- 서머노트를 위해 추가한 부분 -->
<link rel="stylesheet" href="/resources/summernote/summernote-lite.css" >
<script src="/resources/summernote/summernote-lite.js"></script>
<script src="/resources/summernote/lang/summernote-ko-KR.js"></script>
<script type="text/javascript" src="/resources/js/summerNote.js"></script>
<!--  -->

</head>
<body>

	<form action="/board/write" method="post">
		<input type="text" name="id" value="${login.id}" readonly>
		<input type="text" name="nick" value="${login.nick}" readonly>
		<input type="text" name="title">
		<input type="text" name="category" value="free" readonly>
		<br>
		<textarea id="summernote" name="content"></textarea>
		<input type="submit" value="글쓰기">
	</form>
</body>
</html>