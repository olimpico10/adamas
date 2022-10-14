/**
 * lotto 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	getHistory();
	
	// 과거 당첨결과 보기
	function getHistory(){
		$.getJSON("/lotto/historyCompare.json", function(history){
			var str = "";
			
			// 일단 history 불러오기
			for(var i=0; i<history.length; i++){
				str+="<li>"+history[i].lno+"</li>"
				str+="<li>"+history[i].firstPrize+"</li>"
				str+="<li>"+history[i].secondPrize+"</li>"
				str+="<li>"+history[i].thirdPrize+"</li>"
				str+="<li>"+history[i].fourthPrize+"</li>"
				str+="<li>"+history[i].fifthPrize+"</li>"
			}
			
			$(".compare").html(str);
		})
	}
	
})


