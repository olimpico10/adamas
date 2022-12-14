<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>상세 페이지</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/header.js"></script>
<script type="text/javascript" src="/resources/js/detail.js"></script>
<script type="text/javascript" src="/resources/js/reply.js"></script>
<script type="text/javascript" src="/resources/js/like.js"></script>
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
							<input type="hidden" id="loginID" value="${login.id}" readonly>
							<input type="hidden" id="loginNick" value="${login.nick}" readonly>
							<table>
								<tr>
									<td colspan='3'>${detail.title}</td>
								</tr>
								<tr>
									<td>${detail.nick}</td>
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
									<td colspan='3' id="likeTd"><button type="button" id="likeBtn"><img src="/resources/images/nstar.png" id="likeImg"></button><span> 좋아요 </span><span id="likeTotal">0</span></td>
								</tr>
							</table>
						</div>
						<div class="reply_wrap">
							<div class="comments_wrap">
								<ul id="comments">
								</ul>
							</div>
							<div class="enterComment_wrap">
								<ul class="enterCommentUl">
									<li>${login.nick}</li>
									<li><textarea id="enterComment"></textarea></li>
									<li><button type="button" id="regComment">등록</button></li>
								</ul>
							</div>
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