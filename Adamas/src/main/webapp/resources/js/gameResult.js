/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	latestResult();
	getResult();
	
	// 전체 결과에서 클릭 했을 때
	$(".totalResult").on("click", ".result", function(){
		// 해당회차의 번호를 수집하기 위해서
		var lno = $(this).data("lno");
		
		thisResult(lno);
	})
	
	// 전체 당첨결과 불러오는 함수
	function getResult(){
		$.getJSON("/analysis/getResult.json", function(data){
			
			var str=""
			
			for(var i=0; i<data.length; i++){
				var sum = 0;
				var odd = 0;
				var even = 0;
				
				sum = data[i].ball1+data[i].ball2+data[i].ball3+data[i].ball4+data[i].ball5+data[i].ball6;
				
				if(data[i].ball1%2 == 0){
					even++;
				}else{
					odd++;
				}
				if(data[i].ball2%2 == 0){
					even++;
				}else{
					odd++;
				}
				if(data[i].ball3%2 == 0){
					even++;
				}else{
					odd++;
				}
				if(data[i].ball4%2 == 0){
					even++;
				}else{
					odd++;
				}
				if(data[i].ball5%2 == 0){
					even++;
				}else{
					odd++;
				}
				if(data[i].ball6%2 == 0){
					even++;
				}else{
					odd++;
				}
				
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].lno+"회차</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball1+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball2+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball3+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball4+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball5+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].ball6+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+"> + </li>"
				str += "<li class='result' data-lno="+data[i].lno+">"+data[i].bonus+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">합 "+sum+"</li>"
				str += "<li class='result' data-lno="+data[i].lno+">홀짝 "+odd+" : "+even+"</li><br>"
			}
			
			$(".totalResult").html(str);
		})
	}
	
	// 처음 화면에 노출되는 최신 당첨결과 불러오는 함수
	function latestResult(){
		$.getJSON("/analysis/latestResult.json", function(data){
			
			var str=""

			str += "<li>"+data[0].lno+"회차</li>"
			str += "<li> 1등 </li>"
			str += "<li>"+data[0].firstWinner+"명</li>"
			str += "<li>"+data[0].firstPrize+"원</li>"
			str += "<li> 2등 </li>"
			str += "<li>"+data[0].secondWinner+"명</li>"
			str += "<li>"+data[0].secondPrize+"원</li>"
			str += "<li> 3등 </li>"
			str += "<li>"+data[0].thirdWinner+"명</li>"
			str += "<li>"+data[0].thirdPrize+"원</li>"
			str += "<li> 4등 </li>"
			str += "<li>"+data[0].fourthWinner+"명</li>"
			str += "<li>"+data[0].fourthPrize+"원</li>"
			str += "<li> 5등 </li>"
			str += "<li>"+data[0].firstWinner+"명</li>"
			str += "<li>"+data[0].firstPrize+"원</li>"
			str += "<li> 비고 </li>"
			str += "<li>"+data[0].remarks+"</li>"
			str += "<li>------------------------------------------------------</li>"

			$(".thisResult").html(str);
		})
	}
	
	// 해당 당첨결과 불러오는 함수
	function thisResult(lno){
		$.getJSON("/analysis/thisResult/"+lno+".json", function(data){
			
			var str=""
				
			str += "<li>"+data[0].lno+"회차</li>"
			str += "<li> 1등 </li>"
			str += "<li>"+data[0].firstWinner+"명</li>"
			str += "<li>"+data[0].firstPrize+"원</li>"
			str += "<li> 2등 </li>"
			str += "<li>"+data[0].secondWinner+"명</li>"
			str += "<li>"+data[0].secondPrize+"원</li>"
			str += "<li> 3등 </li>"
			str += "<li>"+data[0].thirdWinner+"명</li>"
			str += "<li>"+data[0].thirdPrize+"원</li>"
			str += "<li> 4등 </li>"
			str += "<li>"+data[0].fourthWinner+"명</li>"
			str += "<li>"+data[0].fourthPrize+"원</li>"
			str += "<li> 5등 </li>"
			str += "<li>"+data[0].firstWinner+"명</li>"
			str += "<li>"+data[0].firstPrize+"원</li>"
			str += "<li> 비고 </li>"
			str += "<li>"+data[0].remarks+"</li>"
			str += "<li>------------------------------------------------------</li>"
			
			$(".thisResult").html(str);
		})
	}
})