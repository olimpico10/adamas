/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	getResult();
	
	// 전체 당첨결과 불러오는 함수
	function getResult(){
		$.getJSON("/analysis/getResult.json", function(data){
			
			var str=""
			
			for(var i=0; i<data.length; i++){
				str += "<li>"+data[i].lno+"회차</li>"
				str += "<li>"+data[i].ball1+"</li>"
				str += "<li>"+data[i].ball2+"</li>"
				str += "<li>"+data[i].ball3+"</li>"
				str += "<li>"+data[i].ball4+"</li>"
				str += "<li>"+data[i].ball5+"</li>"
				str += "<li>"+data[i].ball6+"</li>"
				str += "<li> + </li>"
				str += "<li>"+data[i].bonus+"</li>"
			}
			
			$(".totalResult").html(str);
		})
	}
	
	// 해당 당첨결과 불러오는 함수
	function thisResult(){
		$.getJSON("/analysis/thisResult/"+lno+".json", function(data){
			
			var str=""
				
			
		})
	}
})