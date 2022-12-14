/**
 * 로또판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	var total;
	var pageNumValue = 1;
	var amountValue = 10;
	var startNum;
	var endNum;
	var realEnd;
	var prev = false;
	var next = false;	
	
	getStoreList(pageNumValue, amountValue);
	getTotal();
	paging(pageNumValue, amountValue);

	// option1_1를 클릭했을 때
	$("#option1_1_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})

	// option1_2를 클릭했을 때
	$("#option1_2_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})
	
	// option2를 클릭했을 때
	$("#option2_1_title").on("click", function(){
		$(this).next("ul").toggle();
		return false;		
	})

	// 옵션 1-1를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_2_title, #option2_1_title").click(function(e){
		if(!$(e.target).hasClass('option1_1')){
			$("#option1_1").css("display", "none");
		}
	})
	
	// 옵션 1-2를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_1_title, #option2_1_title").click(function(e){
		if(!$(e.target).hasClass('option1_2')){
			$("#option1_2").css("display", "none");
		}
	})
	
	// 옵션 2-1를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body, #option1_1_title, #option1_2_title").click(function(e){
		if(!$(e.target).hasClass('option2_1')){
			$("#option2").css("display", "none");
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
		getStoreList(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 이전 버튼을 클릭 했을 때
	$(".paging_wrap").on("click", ".prevBtn", function(){
		pageNumValue = startNum-1;
		getStoreList(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 다음 버튼을 클릭 했을 때
	$(".paging_wrap").on("click", ".nextBtn", function(){
		pageNumValue = endNum+1;
		getStoreList(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 판매점 리스트 불러오는 함수
	function getStoreList(pageNum, amount){
		$.getJSON("/store/list/"+pageNum+"/"+amount+".json", function(list){
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
			
			$(".storeList").html(str);
		})		
	}
	
	// 판매점 리스트의 total을 구하는 function
	function getTotal(){
		$.getJSON("/store/getTotal.json", function(count){
			total = count;
			alert("판매점 총 수 : "+total);
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
})





