/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	latestResult();
	getResult();
	
	// 전체 결과에서 클릭 했을 때
	$(".totalResult").on("click", ".result_lno, .result_lottoDay, .result", function(){
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
				
				str += "<tr>"
				str += "<td class='tableTLno'>"
				str += "<span class='result_lno' data-lno="+data[i].lno+">"+data[i].lno+"회차 </span>"
				str += "<span class='result_lottoDay' data-lno="+data[i].lno+"> "+data[i].lottoDay+"</span>"
				str += "</td>"
				str += "</tr>"
				str += "<tr>"
				str += "<td class='tableTBall'>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball1+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball2+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball3+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball4+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball5+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].ball6+"</span>"
				str += "<span class='result' data-lno="+data[i].lno+"> + </span>"
				str += "<span class='result' data-lno="+data[i].lno+">"+data[i].bonus+"</span>"
				str += "</td>"
				str += "</tr>"
				str += "<tr>"
				str += "<td class='tableTEtc'>"
				str += "<span class='result' data-lno="+data[i].lno+">합 "+sum+" </span>"
				str += "<span class='result' data-lno="+data[i].lno+"> 홀짝 "+odd+" : "+even+"</span>"
				str += "</td>"
				str += "</tr>"
			}
			
			$(".totalResult").html(str);
		})
	}
	
	// 처음 화면에 노출되는 최신 당첨결과 불러오는 함수
	function latestResult(){
		$.getJSON("/analysis/latestResult.json", function(data){
			
			var str=""

			str += "<tr>"
			str += "<td id='lnotd' colspan='3'><span id='tableLno'>"+data[0].lno+"회차 </span><span id='tableLottoday'> "+data[0].lottoDay+"</span></td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 1등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].firstWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].firstPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 2등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].secondWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].secondPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 3등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].thirdWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].thirdPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 4등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].fourthWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].fourthPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 5등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].fifthWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].fifthPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td> 비고 </td>"
			str += "<td colspan='2'>"+data[0].remarks+"</td>"
			str += "</tr>"
			
			$(".thisResult").html(str);
		})
	}
	
	// 해당 당첨결과 불러오는 함수
	function thisResult(lno){
		$.getJSON("/analysis/thisResult/"+lno+".json", function(data){
			
			var str=""

			str += "<tr>"
			str += "<td id='lnotd' colspan='3'><span id='tableLno'>"+data[0].lno+"회차 </span><span id='tableLottoday'> "+data[0].lottoDay+"</span></td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 1등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].firstWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].firstPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 2등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].secondWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].secondPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 3등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].thirdWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].thirdPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 4등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].fourthWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].fourthPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td class='tableRank'> 5등 </td>"
			str += "<td class='tableWinner'>"+String(data[0].fifthWinner).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"명</td>"
			str += "<td class='tablePrize'>"+String(data[0].fifthPrize).replace(/\B(?=(\d{3})+(?!\d))/g, ',')+"원</td>"
			str += "</tr>"
			str += "<tr>"
			str += "<td> 비고 </td>"
			str += "<td colspan='2'>"+data[0].remarks+"</td>"
			str += "</tr>"
				
			$(".thisResult").html(str);
		})
	}
})