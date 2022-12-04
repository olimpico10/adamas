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
<script type="text/javascript" src="/resources/js/write.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/write.css" >


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
				<div class="content_wrap">
					<form action="/board/write" id="writeForm" method="post">
						<div class="write_title">
							<input type="hidden" name="id" value="${login.id}" readonly>
							<input type="hidden" name="nick" value="${login.nick}" readonly>
							<input type="hidden" name="category" value="free" readonly>
							<table class="title_table">
								<tr>
									<td><input type="text" name="title" id="writeTitle" maxlength="100"></td>
								</tr>
							</table>
						</div>
						<div class="summernote_wrap">
							<textarea id="summernote" name="content"></textarea>
						</div>
						<div class="writeBtn_wrap">
							<button class="btns" id="writeBtn" type="button">글쓰기</button>
							<button class="btns" id="cancelBtn" type="button">취소</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>

</body>
</html>