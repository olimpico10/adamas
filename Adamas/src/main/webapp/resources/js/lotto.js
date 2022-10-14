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
				str+="<li>회차 : "+history[i].lno+"</li>"
				str+="<li>"+history[i].ball1+"</li>"
				str+="<li>"+history[i].ball2+"</li>"
				str+="<li>"+history[i].ball3+"</li>"
				str+="<li>"+history[i].ball4+"</li>"
				str+="<li>"+history[i].ball5+"</li>"
				str+="<li>"+history[i].ball6+"</li>"
				str+="<li>보너스 : "+history[i].bonus+"</li>"
			}
			
			$(".compare").html(str);
		})
	}
	
})


