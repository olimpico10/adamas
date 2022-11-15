/**
 * 로또판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	getStoreList();

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
	$("body").click(function(e){
		if(!$(e.target).hasClass('option1_1')){
			$("#option1_1").css("display", "none");
		}
	})
	
	// 옵션 1-2를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body").click(function(e){
		if(!$(e.target).hasClass('option1_2')){
			$("#option1_2").css("display", "none");
		}
	})
	
	// 옵션 2-1를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body").click(function(e){
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
	
	// 판매점 리스트 불러오는 함수
	function getStoreList(){
		$.getJSON("/store/list.json", function(list){
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
})