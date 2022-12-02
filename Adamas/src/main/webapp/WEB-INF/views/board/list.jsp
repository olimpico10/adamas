<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>리스트 페이지</title>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/list.css" >
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
				<div class="content_title">
					<h1>게시글 목록</h1>
				</div>
				<div class="list_wrap">
					<table class="list_table">
						<tr>
							<td>글번호</td><td>제목</td><td>닉네임</td><td>작성일시</td><td>조회수</td><td>추천수</td>
						</tr>
						<c:forEach items="${list}" var="list">
							<tr>
								<td>${list.bno}</td>
								<td><a href="/board/detail?bno=${list.bno}&pageNum=${paging.cri.pageNum}">${list.title}</a></td>
								<td>${list.nick}</td>
								<td>${list.regdate}</td>
								<td>${list.cnt}</td>
								<td>${list.hnocnt}</td>
							</tr>
						</c:forEach>
					</table>				
				</div>
				<div class="pagingArea">
					<ul id="paging">
						<!-- prev(이전)이 true이면 이전버튼 활성화 -->
						<c:if test="${paging.prev}">
							<li><a href="/board/list?pageNum=${paging.startPage-1}&amount=${paging.cri.amount}">이전</a></li>
						</c:if>
						
						<!-- begin(1)이 end(10) 될 동안 반복(1이 10 될 동안 반복) -->
						<c:forEach begin="${paging.startPage}" end="${paging.endPage}" var="num">
							<li><a href="/board/list?pageNum=${num}&amount=${paging.cri.amount}"
								<c:if test="${paging.cri.pageNum==num}">
									style="font-weigth:bold; color:red;"
								</c:if>
							>${num}</a></li>
						</c:forEach>

						<!-- next(다음)이 true이면 다음버튼 활성화 -->
						<c:if test="${paging.next}">
							<li><a href="/board/list?pageNum=${paging.endPage+1}&amount=${paging.cri.amount}">다음</a></li>
						</c:if>
					</ul>
				</div>
			</div>
		</div>
	</div>
</body>
</html>