/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	var total;
	var pageNumValue = 1;
	var amountValue = 10;
	var startNum;
	var endNum;
	var realEnd;
	var prev = false;
	var next = false;
		
	latestResult(pageNumValue, amountValue);
	getResult(pageNumValue, amountValue);
	getTotal();
	paging(pageNumValue, amountValue);
	
	// 전체 결과에서 클릭 했을 때
	$(".totalResult").on("click", ".grBallImg", function(){
		// 해당회차의 번호를 수집하기 위해서
		var lno = $(this).data("lno");
		
		thisResult(lno);
		$('html').scrollTop(0);
	})
	
	// 페이지 번호르 클릭 했을 때
	$(".pagingArea").on("click", ".pageNumBtn", function(){
		pageNumValue = parseInt($(this).text());
		getResult(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 이전 버튼을 클릭 했을 때
	$(".pagingArea").on("click", ".prevBtn", function(){
		pageNumValue = startNum-1;
		getResult(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 다음 버튼을 클릭 했을 때
	$(".pagingArea").on("click", ".nextBtn", function(){
		pageNumValue = endNum+1;
		getResult(pageNumValue, amountValue);
		paging(pageNumValue, amountValue);
	})
	
	// 전체 당첨결과 불러오는 함수
	function getResult(pageNum, amount){
		$.getJSON("/analysis/getResult/"+pageNum+"/"+amount+".json", function(data){
			
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
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball1)+".png' data-lno="+data[i].lno+">"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball2)+".png' data-lno="+data[i].lno+">"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball3)+".png' data-lno="+data[i].lno+">"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball4)+".png' data-lno="+data[i].lno+">"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball5)+".png' data-lno="+data[i].lno+">"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].ball6)+".png' data-lno="+data[i].lno+">"
				str += "<span class='grPlus' data-lno="+data[i].lno+"> + </span>"
				str += "<img class='grBallImg' src='/resources/images/ball"+parseInt(data[i].bonus)+".png' data-lno="+data[i].lno+">"
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
	function latestResult(pageNum, amount){
		$.getJSON("/analysis/latestResult/"+pageNum+"/"+amount+".json", function(data){
			
			var str=""

			str += "<tr>"
			str += "<td id='lnotd' colspan='3'><span id='tableLno'>"+data[0].lno+"회차 </span><span id='tableLottoday'> "+data[0].lottoDay+" </span>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball1)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball2)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball3)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball4)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball5)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball6)+".png'>"
			str += "<span id='trPlus'> + </span>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].bonus)+".png'></td>"
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
			str += "<td id='lnotd' colspan='3'><span id='tableLno'>"+data[0].lno+"회차 </span><span id='tableLottoday'> "+data[0].lottoDay+" </span>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball1)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball2)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball3)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball4)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball5)+".png'>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].ball6)+".png'>"
			str += "<span id='trPlus'> + </span>"
			str += "<img class='trBallImg' src='/resources/images/ball"+parseInt(data[0].bonus)+".png'></td>"
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
	
	// paging을 위한 lno total 구하는 function
	function getTotal(){
		$.getJSON("/analysis/getTotal.json", function(count){
			total = count;
		})
	}
	
	// total을 받아서 paging 하는 function
	function paging(pageNum, amount){
		var prevStr = "";
		var numStr = "";
		var nextStr = "";
		var noData = "";
		
		endNum = Math.ceil(pageNum/10.0)*10;
		startNum = endNum-9;
		realEnd = Math.ceil(total*1.0/amount);
		
		if(realEnd < endNum){
			endNum = realEnd;
		}
		
		prev = startNum>1;
		next = endNum<realEnd;
		
		if(prev){
			var prevStr = "<li class='prevBtn'>이전</li>";
		}
		
		for(var i=startNum; i<=endNum; i++){
			if(i == pageNumValue){
				numStr += "<li class='pageNumBtn' style='font-weight:bold; color:red;'>"+i+"</li>";
			} else{
				numStr += "<li class='pageNumBtn'>"+i+"</li>";
			}
		}
		
		if(next){
			var nextStr = "<li class='nextBtn'>다음</li>";
		}
		
		if(total <= 0){
			noData += "<li>정보가 없습니다.</li>";
		}
		
		$("#paging").html(prevStr + numStr + nextStr + noData);
	}
})












