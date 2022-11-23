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
						<a href="/board/detail?bno=${detail.last_bno}"><button type="button" class="btn_prev">▲ 이전글</button></a>
					</c:if>
					<c:if test="${detail.next_bno != 'oldest'}">
						<a href="/board/detail?bno=${detail.next_bno}"><button type="button" class="btn_next">▼ 다음글</button></a>
					</c:if>
					<a href="/board/list?pageNum=${paging.pageNum}"><button type="button" class="btn_list">목록</button></a>
				</div>
				<div class="contentBox">
					<form method="post">
						<div class="content_table">
							<input type="hidden" name="bno" value="${detail.bno}" readonly>
							<table>
								<tr>
									<td colspan='3'>${detail.title}</td>
								</tr>
								<tr>
									<td>${detail.id}</td>
									<td>${detail.regdate}</td>
									<td>menu</td>
								</tr>
								<tr>
									<td colspan='3'>${detail.content}</td>
								</tr>
								<tr>
									<td colspan='3'>좋아요 댓글</td>
								</tr>
							</table>
						</div>
						<div class="contentBtns">
							<a href="/board/modify?bno=${detail.bno}">수정하기</a>
							<input type="submit" value="삭제" formaction="/board/remove">	
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