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
	
	// 회차리스트 중 하나를 클릭 했을 때
	$(".selectlno").on("click", ".lno", function(){
		var lno = $(this).data("lno");
		
		$("#selectedlno").text(lno);
		getStoreList(lno);
	})
	
	// 판매점 리스트의 돋보기를 클릭 했을 때
	$(".storeList").on("click", ".map", function(){
		var location = $(this).data("location");
		var sname = $(this).data("sname");
		
		this.href = "/store/map?location="+location+"&sname="+sname;
		
		window.open(this.href, '_blank', 'width=400', 'height=400');
		return false;
	})
	
	// 당첨 판매점 리스트 불러오는 함수
	function getStoreList(lno){
		$.getJSON("/store/topList/"+lno+".json", function(list){
			var str = "";
			
			for(var i=0; i<list.length; i++){
				str += "<li>"+list[i].sname+"</li>"
				str += "<li>"+list[i].tsremarks+"</li>"
				str += "<li>"+list[i].location+"</li>"
				str += "<li class='map' data-location='"+list[i].location+"' data-sname='"+list[i].sname+"'>클릭</li>"
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