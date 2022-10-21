/**
 * 로또판매점 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	getStoreList();
	
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
			
			for(var i=0; i<list.length; i++){
				str += "<li data-location="+list[i].location+">"+list[i].sname+"</li>"
				str += "<li data-location="+list[i].location+">"+list[i].phone+"</li>"
				str += "<li data-location="+list[i].location+">"+list[i].location+"</li>"
				str += "<li class='map' data-location='"+list[i].location+"' data-sname="+list[i].sname+">클릭</li>"
			}
			
			$(".storeList").html(str);
		})
		
	}
})