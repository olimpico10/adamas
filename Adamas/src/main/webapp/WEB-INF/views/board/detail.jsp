<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상세 페이지</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/detail.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/detail.css" >
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
				<div class="topBtns">
					<c:if test="${detail.last_bno != 'latest'}">
						<a href="/board/detail?bno=${detail.last_bno}&pageNum=${paging.pageNum}"><button type="button" class="btn_prev">▲ 이전글</button></a>
					</c:if>
					<c:if test="${detail.next_bno != 'oldest'}">
						<a href="/board/detail?bno=${detail.next_bno}&pageNum=${paging.pageNum}"><button type="button" class="btn_next">▼ 다음글</button></a>
					</c:if>
					<a href="/board/list?pageNum=${paging.pageNum}"><button type="button" class="btn_list">목록</button></a>
				</div>
				<div class="contentBox">
					<form id="removeForm" action="/board/remove" method="post">
						<div class="content_table">
							<input type="hidden" name="bno" id="bno" value="${detail.bno}" readonly>
							<table>
								<tr>
									<td colspan='3'>${detail.title}</td>
								</tr>
								<tr>
									<td>${detail.id}</td>
									<td>${detail.regdate}</td>
									<td id="moreBtntd">
										<img id="moreBtn" src="/resources/images/moreBtn.png">
										<ul id="moreOpt">
											<c:if test="${detail.id == login.id}">
												<li class="moreOpt" id="modify">수정</li>
												<li class="moreOpt" id="remove">삭제</li>
											</c:if>
											<li class="moreOpt" id="copyUrl">url 복사</li>
										</ul>
									</td>
								</tr>
								<tr>
									<td colspan='3'>${detail.content}</td>
								</tr>
								<tr>
									<td colspan='3'>좋아요 댓글</td>
								</tr>
							</table>
						</div>
						<div class="comment_wrap">
							<ul>
							</ul>
							<ul class="enterComment">
								<li>${login.id}</li>
								<li><textarea rows="5" cols="119" id="enterComment"></textarea></li>
								<li><button type="button">등록</button></li>
							</ul>
						</div>
					</form>
				</div>
				<div class="bottomBtns">
					<a href="/board/list?pageNum=${paging.pageNum}"><button type="button">목록</button></a>
					<button type="button" id="toTheTop">⬆ top</button>
				</div>
		
			</div>
		</div>
	</div>


</body>
</html>