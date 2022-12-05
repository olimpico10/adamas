<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>판매점 조회</title>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script type="text/javascript" src="/resources/js/sellerInfo.js"></script>
<script type="text/javascript" src="/resources/js/header.js"></script>
<link rel="stylesheet" href="/resources/css/common.css" >
<link rel="stylesheet" href="/resources/css/sellerInfo.css" >
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
					<h1>판매점 조회</h1>
				</div>
				<div class="option_wrap">
					<div id="region_wrap">
						<div class="option1_title">
							<h4><span style="color:#005766;">지역</span><span>으로 검색</span></h4>
						</div>
						<div class="option1_wrap">
							<div id="option1_1_wrap">
								<span id="option1_1_title">울산</span>
								<ul id="option1_1">
								</ul>
							</div>
							<div id="option1_2_wrap">
								<span id="option1_2_title">남구</span>
								<ul id="option1_2">
								</ul>							
							</div>
							<div id="option1_3_wrap">
								<button type="button">조회</button>
							</div>
						</div>
					</div>
					<div id="store_wrap">
						<div class="option2_title">
							<h4><span style="color:#005766;">상호명/지역명</span><span>으로 검색</span></h4>
						</div>
						<div class="option2_wrap">
							<div id="option2_1_wrap">
								<span id="option2_1_title">상호</span>
								<ul id="option2">
									<li class="option2_1" data-option="storename">상호</li>
									<li class="option2_1" data-option="location">지역</li>
								</ul>
							</div>
							<div id="option2_2_wrap">
								<input type="text" style="border:0 solid black;" id="searchWord">
							</div>
							<div id="option2_3_wrap">
								<button type="button">조회</button>
							</div>
						</div>
					</div>
				</div>
				<div class="storeList_wrap">
					<table class="storeList">
					</table>
				</div>
				<div class="paging_wrap">
					<ul id="paging">
					</ul>
				</div>
			</div>
		</div>
	</div>
	
	

</body>
</html>