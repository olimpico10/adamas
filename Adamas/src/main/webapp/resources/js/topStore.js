/**
 * 당첨판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	getStoreList();
	
	// 당첨 판매점 리스트 불러오는 함수
	function getStoreList(){
		$.getJSON("/store/topList.json", function(list){
			var str = "";
			
			for(var i=0; i<list.length; i++){
				str += "<li data-location="+list[i].location+">"+list[i].sname+"</li>"
				str += "<li data-location="+list[i].location+">"+list[i].tsremarks+"</li>"
				str += "<li data-location="+list[i].location+">"+list[i].location+"</li>"
				str += "<li class='map' data-location='"+list[i].location+"' data-sname="+list[i].sname+">클릭</li>"
			}
			
			$(".storeList").html(str);
		})
		
	}
})