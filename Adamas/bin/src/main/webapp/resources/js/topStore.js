/**
 * 당첨판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	// 최신회차를 저장하기 위한 변수
	var maxlno;
	var lno;
	
	getMaxlno();
	$("#selectedlno").text(maxlno);
	getlnoList();
	getStoreList(maxlno);
	
	// selectedlno를 클릭했을 때
	$("#selectedlno").on("click", function(){
		$(this).next("ul").toggle();
		return false;
	})

	// 회차리스트 중 하나를 클릭 했을 때
	$(".selectlno").on("click", ".lno", function(){
		var lno = $(this).data("lno");
		
		$(".selectlno").css("display", "none");
		$("#selectedlno").text(lno);
		getStoreList(lno);
	})

	// 회차리스트를 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body").click(function(e){
		if(!$(e.target).hasClass('lno')){
			$(".selectlno").css("display", "none");
		}
	})
	
	// 판매점 리스트의 돋보기를 클릭 했을 때
	$(".storeList").on("click", ".map", function(){
		if($(this).data("location") == "동행복권(dhlottery.co.kr)"){
			this.href = "http://www.dhlottery.co.kr";
			window.open(this.href, '_blank', 'width=400', 'height=400');
			return false;
		} else{
			var location = $(this).data("location");
			var sname = $(this).data("sname");
			
			this.href = "/store/map?location="+location+"&sname="+sname;
			
			window.open(this.href, '_blank', 'width=400', 'height=400');
			return false;
		}
	})
	
	// 당첨 판매점 리스트 불러오는 함수
	function getStoreList(lno){
		$.getJSON("/store/topList/"+lno+".json", function(list){
			var str = "";
			
			str += "<tr>"
			str += "<td>상호명</td>"
			str += "<td>구분</td>"
			str += "<td>소재지</td>"
			str += "<td>위치보기</td>"
			str += "</tr>"
			
			for(var i=0; i<list.length; i++){
				str += "<tr>"
				str += "<td>"+list[i].sname+"</td>"
				str += "<td>"+list[i].tsremarks+"</td>"
				str += "<td>"+list[i].location+"</td>"
				str += "<td class='map' data-location='"+list[i].location+"' data-sname='"+list[i].sname+"'><img src='/resources/images/pin.png'></td>"
				str += "</tr>"
			}
			
			$(".storeList").html(str);
		})
		
	}
	
	// 최신회차를 불러오기 위한 함수
	function getMaxlno(){
		$.getJSON("/store/getMaxlno.json", function(data){
			maxlno = data;
		})
	}
	
	// 전체회차들을 불러오기 위한 함수
	function getlnoList(){
		$.getJSON("/store/getlnoList.json", function(data){
			var str="";
			
			for(var i=0; i<data.length; i++){
				str += "<li class='lno' data-lno="+data[i]+">"+data[i]+"</li>"
			}
			
			$(".selectlno").html(str);
		})
	}
})