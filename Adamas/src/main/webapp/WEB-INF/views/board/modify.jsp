<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>수정 페이지</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<!-- 서머노트를 위해 추가한 부분 -->
<link rel="stylesheet" href="/resources/summernote/summernote-lite.css" >
<script src="/resources/summernote/summernote-lite.js"></script>
<script src="/resources/summernote/lang/summernote-ko-KR.js"></script>
<script type="text/javascript" src="/resources/js/summerNote.js"></script>
<!--  -->
</head>
<body>
	<form action="/board/modify" method="post">
		<input type="text" name="bno" value="${modify.bno}" readonly>
		<input type="text" name="title" value="${modify.title}">
		<input type="text" name="category" value="${modify.category}" >
		<textarea id="summernote" name="content">${modify.content}</textarea>
		<input type="submit" value="수정하기">
	</form>
</body>
</html>