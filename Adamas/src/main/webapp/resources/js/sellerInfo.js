/**
 * 로또판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	var sidoValue = "울산";
	var gugunValue = "남구";
	var storeNameValue = "  ";
	var locationValue = "울산 남구";
	var total;
	var pageNumValue = 1;
	var amountValue = 10;
	var startNum;
	var endNum;
	var realEnd;
	var prev = false;
	var next = false;	
	
	getSIDO();
	getGUGUN(sidoValue);
	getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
	getTotal(storeNameValue, locationValue);
	paging(pageNumValue, amountValue);

	// option1_1_title를 클릭했을 때
	$("#option1_1_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})
	
	// option1_1를 클릭했을 때
	$(".option1_1").on("click", function(){
		sidoValue = $(this).data("city");

		$("#option1_1").css("display", "none");
		$("#option1_1_title").text(sidoValue);
		$("#option1_2_title").text("구/군 선택");
		getGUGUN(sidoValue);
	})
	
	// 옵션 1-1를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_2_title, #option2_1_title").click(function(e){
		if(!$(e.target).hasClass('option1_1')){
			$("#option1_1").css("display", "none");
		}
	})

	// option1_2_title를 클릭했을 때
	$("#option1_2_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})
	
	// option1_2를 클릭했을 때
	$("#option1_2").on("click", ".option1_2", function(){
		gugunValue = $(this).data("region");

		$("#option1_2").css("display", "none");
		$("#option1_2_title").text(gugunValue);
	})
	
	// 옵션 1-2를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_1_title, #option2_1_title").click(function(e){
		if(!$(e.target).hasClass('option1_2')){
			$("#option1_2").css("display", "none");
		}
	})
	
	// option1_3_wrap 영역의 '조회' 버튼을 클릭했을 때
	$("#option1_3_wrap").on("click", "button", function(){
		locationValue = sidoValue+" "+gugunValue;
		storeNameValue = "  ";
		pageNumValue = 1;
		
		getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
		getTotal(storeNameValue, locationValue);
		paging(pageNumValue, amountValue);
	})
	
	// option2_1_title를 클릭했을 때
	$("#option2_1_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})
	
	// option2_1를 클릭했을 때
	$(".option2_1").on("click", function(){
		if($(this).data("option") == "storename"){
			$("#option2").toggle();
			$("#option2_1_title").text("상호");
		} else if($(this).data("option") == "location"){
			$("#option2").toggle();
			$("#option2_1_title").text("지역");
		}
	})
	
	// 옵션 2-1를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_1_title, #option1_2_title").click(function(e){
		if(!$(e.target).hasClass('option2_1')){
			$("#option2").css("display", "none");
		}
	})
	
	// option2_3_wrap 영역의 '조회' 버튼을 클릭했을 때
	$("#option2_3_wrap").on("click", "button", function(){
		if($("#searchWord").val() == ""){
			alert("검색어를 입력하세요");
		} else{
			if($("#option2_1_title").text()=="상호"){
				storeNameValue = $("#searchWord").val();
				locationValue = "  ";
				pageNumValue = 1;
				// alert("상호조회 : "+storeNameValue);
				// alert("location변수 저장상황 : "+locationValue);
				getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
				getTotal(storeNameValue, locationValue);
				paging(pageNumValue, amountValue);
			} else if($("#option2_1_title").text()=="지역"){
				locationValue = $("#searchWord").val();
				storeNameValue = "  ";
				pageNumValue = 1;
				// alert("지역조회 : "+locationValue);
				// alert("storeName변수 저장상황 : "+storeNameValue);
				getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
				getTotal(storeNameValue, locationValue);
				paging(pageNumValue, amountValue);
			}
		}
	})
	
	// 해당 판매점을 클릭 했을 때
	$(".storeList").on("click", ".map", function(){
		var location = $(this).data("location");
		//alert(location);
		var sname = $(this).data("sname");
		
		this.href = "/store/map?location="+location+"&sname="+sname;
		
		window.open(this.href, '_blank', 'width=400', 'height=400');
		return false;
	})

	// 페이지 번호르 클릭 했을 때
	$(".paging_wrap").on("click", ".pageNumBtn", function(){
		pageNumValue = parseInt($(this).text());
		getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
		paging(pageNumValue, amountValue);
	})
	
	// 이전 버튼을 클릭 했을 때
	$(".paging_wrap").on("click", ".prevBtn", function(){
		pageNumValue = startNum-1;
		getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
		paging(pageNumValue, amountValue);
	})
	
	// 다음 버튼을 클릭 했을 때
	$(".paging_wrap").on("click", ".nextBtn", function(){
		pageNumValue = endNum+1;
		getStoreList(pageNumValue, amountValue, storeNameValue, locationValue);
		paging(pageNumValue, amountValue);
	})
	
	// 판매점 리스트 불러오는 함수
	function getStoreList(pageNum, amount, storeName, location){
		$.getJSON("/store/list/"+pageNum+"/"+amount+"/"+storeName+"/"+location+".json", function(list){
			var str="";
			
			str += "<tr>"
			str += "<td>상호명</td>"
			str += "<td>전화번호</td>"
			str += "<td>소재지</td>"
			str += "<td>위치보기</td>"
			str += "</tr>"
			
			for(var i=0; i<list.length; i++){
				str += "<tr>"
				str += "<td data-location="+list[i].location+">"+list[i].sname+"</td>"
				str += "<td data-location="+list[i].location+">"+list[i].phone+"</td>"
				str += "<td data-location="+list[i].location+">"+list[i].location+"</td>"
				str += "<td class='map' data-location='"+list[i].location+"' data-sname='"+list[i].sname+"'><img src='/resources/images/pin.png'></td>"
				str += "</tr>"
			}
			
			/* 조회 결과가 없을 때 .. 중복되는 부분이어서 뺐다.
			 * 
			if(list == ""){
				str += "<tr>"
				str += "<td colspan='4'>조회결과가 없습니다.</td>"
				str += "</tr>"	
			}
			*/
			
			$(".storeList").html(str);
		})		
	}
	
	// 판매점 리스트의 total을 구하는 function
	function getTotal(storeName, location){
		$.getJSON("/store/getTotal/"+storeName+"/"+location+".json", function(count){
			total = count;
		})
	}
	
	// total을 받아서 paging 하는 function
	function paging(pageNum, amount){
		var prevStr = "";
		var numStr = "";
		var nextStr = "";
		var noData = "";
		
		endNum = Math.ceil(pageNum/10.0)*10;
		startNum = endNum-9;
		realEnd = Math.ceil(total*1.0/amount);
		
		if(realEnd < endNum){
			endNum = realEnd;
		}
		
		prev = startNum>1;
		next = endNum<realEnd;
		
		if(prev){
			var prevStr = "<li class='prevBtn'>이전</li>";
		}
		
		for(var i=startNum; i<=endNum; i++){
			if(i == pageNumValue){
				numStr += "<li class='pageNumBtn' style='font-weight:bold; color:red;'>"+i+"</li>";
			} else{
				numStr += "<li class='pageNumBtn'>"+i+"</li>";
			}
		}
		
		if(next){
			var nextStr = "<li class='nextBtn'>다음</li>";
		}
		
		if(total <= 0){
			noData += "<li>정보가 없습니다.</li>";
		}
		
		$("#paging").html(prevStr + numStr + nextStr + noData);
	}
	
	// 지역검색 > 시/도 리스트 불러오는 함수
	function getSIDO(){
		$.getJSON("/store/sido.json", function(list){
			var str = "";
			
			for(i=0; i<list.length; i++){
				str += "<li class='option1_1' data-city='"+list[i].city+"'>"+list[i].city+"</li>"
			}
			
			$("#option1_1").html(str);
		})
	}
	
	function getGUGUN(sido){
		$.getJSON("/store/gugun/"+sido+".json", function(list){
			var str = "";
			
			for(i=0; i<list.length; i++){
				str += "<li class='option1_2' data-region='"+list[i].region+"'>"+list[i].region+"</li>"
			}
			
			$("#option1_2").html(str);
		})		
	}
})





