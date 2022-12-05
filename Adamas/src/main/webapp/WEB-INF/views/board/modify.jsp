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
<script type="text/javascript" src="/resources/js/header.js"></script>
<script type="text/javascript" src="/resources/js/modify.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/modify.css" >
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
				<div class="modify_wrap">
					<form action="/board/modify" id="modifyForm" method="post">
						<div class="modify_title">
							<input type="hidden" name="bno" id="bno" value="${modify.bno}" readonly>
							<input type="hidden" name="category" value="${modify.category}" readonly>
							<table class="title_table">
								<tr>
									<td><input type="text" name="title" id="modifyTitle" value="${modify.title}" maxlength="100"></td>
								<tr>
							</table>
						</div>
						<div class="summernote_wrap">
							<textarea id="summernote" name="content">${modify.content}</textarea>
						</div>
						<div class="modifyBtn_wrap">
							<button class="btns" id="modifyBtn" type="button">수정하기</button>
							<button class="btns" id="cancelBtn" type="button">취소</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

</body>
</html>