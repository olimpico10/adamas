/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	// 로그인한 아이디 값을 저장하는 변수 
	var loginId = $("#loginId").val();
	// 선택 된 로또번호를 저장하는 배열
	var lotto = [];
	// 내가 저장한 번호의 total 값을 저장하는 변수
	var myTotal;
	// pageNum
	var myPageNumValue = 1;
	// 한 페이지당 amount
	var myAmountValue = 10;
	var myStartNum;
	var myEndNum;
	var myRealEnd;
	var myPrev = false;
	var myNext = false;
	var yTotal;
	var yPageNumValue = 1;
	var yAmountValue = 10;
	var yStartNum;
	var yEndNum;
	var yRealEnd;
	var yPrev = false;
	var yNext = false;
	
	getMylotto(loginId, myPageNumValue, myAmountValue);
	getMylottoTotal(loginId);
	myPaging(myPageNumValue, myAmountValue);
	
	// 내가 저장한 번호 페이지 번호를 클릭 헀을 때
	$("#myPaging").on("click", ".pageNumBtn", function(){
		myPageNumValue = parseInt($(this).text());
		getMylotto(loginId, myPageNumValue, myAmountValue);
		myPaging(myPageNumValue, myAmountValue);
	})
	
	// 내가 저장한 번호 이전 버튼을 클릭 헀을 때
	$("#myPaging").on("click", ".prevBtn", function(){
		myPageNumValue = myStartNum-1;
		getMylotto(loginId, myPageNumValue, myAmountValue);
		myPaging(myPageNumValue, myAmountValue);
	})
	
	// 내가 저장한 번호 다음 버튼을 클릭 헀을 때
	$("#myPaging").on("click", ".nextBtn", function(){
		myPageNumValue = myEndNum+1;
		getMylotto(loginId, myPageNumValue, myAmountValue);
		myPaging(myPageNumValue, myAmountValue);
	})

	// 내가 저장한 번호영역에서 삭제를 클릭 했을 때
	$(".mylotto").on("click", ".mydelete", function(){
		var mlno = $(this).data("mlno");
		
		mylottoRemove(mlno);
		getMylotto(loginId, myPageNumValue, myAmountValue);
		getMylottoTotal(loginId);
		myPaging(myPageNumValue, myAmountValue);
	})
	
	// 1년 이내 결과  페이지 번호를 클릭 헀을 때
	$("#wPaging").on("click", ".pageNumBtn", function(){
		yPageNumValue = parseInt($(this).text());
		myResult(yPageNumValue, yAmountValue)
		yPaging(yPageNumValue, yAmountValue);
	})
	
	// 1년 이내 결과 이전 버튼을 클릭 헀을 때
	$("#wPaging").on("click", ".prevBtn", function(){
		yPageNumValue = yStartNum-1;
		myResult(yPageNumValue, yAmountValue)
		yPaging(yPageNumValue, yAmountValue);
	})
	
	//  1년 이내 결과 다음 버튼을 클릭 헀을 때
	$("#wPaging").on("click", ".nextBtn", function(){
		yPageNumValue = yEndNum+1;
		myResult(yPageNumValue, yAmountValue)
		yPaging(yPageNumValue, yAmountValue);
	})

	// 내가 저장한 번호영역에서 선택을 클릭 했을 때
	$(".mylotto").on("click", ".myball", function(){	
		yPageNumValue = 1;
		
		lotto[0] = $(this).data("myball1")
		lotto[1] = $(this).data("myball2")
		lotto[2] = $(this).data("myball3")
		lotto[3] = $(this).data("myball4")
		lotto[4] = $(this).data("myball5")
		lotto[5] = $(this).data("myball6")
		
		myResult(yPageNumValue, yAmountValue)
		$("html").scrollTop($(".content")[0].scrollHeight);
		getYearTotal();
		yPaging(yPageNumValue, yAmountValue);
	})
	
	// 저장 된 로또번호 불러오는 함수
	function getMylotto(id, pageNum, amount){
		$.getJSON("/analysis/mylotto/"+id+"/"+pageNum+"/"+amount+".json", function(list){
			var str = "";
			
			str += "<tr><td id='tdTitle' colspan='8' style='color:#EAEAEA'>내가 저장한 번호</td></tr>"
			for(var i=0; i<list.length; i++){
				str += "<tr>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball1)+".png'></td>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball2)+".png'></td>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball3)+".png'></td>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball4)+".png'></td>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball5)+".png'></td>"
				str += "<td><img class='myBallImg' src='/resources/images/ball"+parseInt(list[i].myball6)+".png'></td>"
				str += "<td class='myball' data-myball1="+list[i].myball1+" data-myball2="+list[i].myball2+" data-myball3="+list[i].myball3+" data-myball4="+list[i].myball4+" data-myball5="+list[i].myball5+" data-myball6="+list[i].myball6+"><button>선택</button></td>"
				str += "<td class='mydelete' data-mlno="+list[i].mlno+"><button>삭제</button></td>"
				str += "</tr>"
			}
			
			$(".mylotto").html(str);
		})
	}
	
	// 내가 선택한 번호조합 테이블에 출력해주는 function
	function selectedBall(arrLotto){
		var sStr = "";
		
		sStr += "<tr>"
		sStr += "<td colspan='6'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[0])+".png'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[1])+".png'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[2])+".png'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[3])+".png'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[4])+".png'>"
		sStr += "<img class='sBallImg' src='/resources/images/ball"+parseInt(lotto[5])+".png'>"
		sStr += "</td>"
		sStr += "</tr>"
			
		$(".winning").html(sStr);		
	}
	
	// 최근 1년이내 로또번호와 내가 선택한 번호를 비교해주는 함수
	function myResult(pageNum, amount){
		$.getJSON("/analysis/getYearResult/"+pageNum+"/"+amount+".json", function(list){
			selectedBall(lotto);
			
			var str = "";
			
			str += "<tr>"
			str += "<td>회차</td>"
			str += "<td>일자</td>"
			str += "<td>당첨번호</td>"
			str += "<td>보너스번호</td>"
			str += "<td>번호일치</td>"
			str += "<td>등수</td>"
			str += "</tr>"
				
			for(var i=0; i<list.length; i++){
				// 번호 비교 후 일치 여부를 화면에 나타내기 위한 변수
				var compareStr = "";
				// 보너스 번호와 비교 후 일치 여부를  화면에 나타내기 위한 변수
				var bonusStr = "";
				// 번호 일치 갯수와 보너스 일치를 화면에 나타내기 위한 변수
				var totalStr = "";
				// 등수를 화면에 나타내기 위한 변수
				var rankStr = "";
				// 번호일치 갯수를 저장하기 위한 변수
				var cntEqual = 0;
				// 보너스 일치여부를 저장하기 위한 변수
				var bonusEqual = false;
				// 당첨번호를 저장하기 위한 배열
				var arrNumber = [list[i].ball1, list[i].ball2, list[i].ball3, list[i].ball4, list[i].ball5, list[i].ball6];
				
				console.log("당첨번호 : "+arrNumber+" 보너스번호 : "+list[i].bonus);
				console.log("선택번호 : "+lotto);
				
				// list[i]의 arrNumber[?]를 반복하기 위한 반복문. ?는 j로 반복문을 수행한다
				for(var j=0; j<arrNumber.length; j++){
					// 비교 했을 때 값을 저장하기 위한 변수
					var compare = false;
					
					// arrNumber[j] 와 lotto[k]를 비교하기 위한 반복문 
					for(var k=0; k<lotto.length; k++){
						if(arrNumber[j]==lotto[k]){
							cntEqual++;
							compare = true;
							
							console.log("당첨번호 list["+i+"]의 "+(j+1)+"번째 당첨번호 : "+arrNumber[j]+", 선택번호 : "+lotto[k]+" 일치");
						} else{
							
							console.log("당첨번호 list["+i+"]의 "+(j+1)+"번째 당첨번호 : "+arrNumber[j]+", 선택번호 : "+lotto[k]+" 불일치");
						}	
					}
					
					// 값을 비교했을 때 일치하면
					if(compare){
						compareStr += "<span style='color: red'> "+arrNumber[j]+" </span>"
					} else{
						compareStr += "<span> "+arrNumber[j]+" </span>"
					}
				}
				
				totalStr += cntEqual;
				console.log("당첨번호 list["+i+"]의 일치 갯수는 : "+cntEqual);
				
				// list[i]의 보너스 번호와 선택한 번호를 비교하기 위한 반복문
				for(var k=0; k<lotto.length; k++){
					if(list[i].bonus == lotto[k]){
						bonusEqual = true;
						
						console.log("당첨번호 list["+i+"]의 보너스 번호 "+list[i].bonus+"와 선택번호 "+lotto[k]+"가 일치합니다.");
					}
				}
				
				// 보너스 번호와 선택번호 일치를 나타내기 위한 조건문
				if(bonusEqual){
					bonusStr += "<span style='color: red'>"+list[i].bonus+" </span>"
					totalStr += " + Bonus"
				} else{
					bonusStr += "<span>"+list[i].bonus+" </span>"
				}
				
				// 등수를 나타내기 위한 조건문
				if(cntEqual >= 3){
					if(cntEqual == 3){
						rankStr = "5등"
							
						console.log("5등 당첨입니다");
					} else if(cntEqual == 4){
						rankStr = "4등"
							
						console.log("4등 당첨입니다");
					} else if(cntEqual == 5 && bonusEqual == false){
						rankStr = "3등"
							
						console.log("3등 당첨입니다");
					} else if(cntEqual == 5 && bonusEqual == true){
						rankStr = "2등"
							
						console.log("2등 당첨입니다");
					} else{
						rankStr = "1등"
						
						console.log("1등 당첨입니다");
					}
				} else{
					rankStr = "X"
						
					console.log("낙첨");
				}
				
				str += "<tr>"
				str += "<td>"+list[i].lno+"</td>"
				str += "<td>"+list[i].lottoDay+"</td>"
				str += "<td>"+compareStr+"</td>"
				str += "<td>"+bonusStr+"</td>"
				str += "<td>"+totalStr+"</td>"
				str += "<td>"+rankStr+"</td>"
				str += "</tr>"
			}
			
			$(".winning").append(str);
		})
	}
	
	// 내가 저장한 번호 삭제를 하는 function
	function mylottoRemove(mlno){
		$.ajax({
			type: "delete",
			url: "/analysis/mylottoRemove/"+mlno,
			success: function(result){
				if(result == "success"){
					alert("해당 번호 조합을 삭제했습니다");
				}
			}
		})
	}	
	
	// 내가 저장한 번호 total을 구하는 function
	function getMylottoTotal(id){
		$.getJSON("/analysis/getMylottoTotal/"+id+".json", function(count){
			myTotal = count;
		})
	}
	
	// 내가 저장한 번호 total을 받아서  paging 하는 function
	function myPaging(pageNum, amount){
		var prevStr = "";
		var numStr = "";
		var nextStr = "";
		var noData = "";
		
		myEndNum = Math.ceil(pageNum/10.0)*10;
		myStartNum = myEndNum-9;
		myRealEnd = Math.ceil(myTotal*1.0/amount);
		
		if(myRealEnd < myEndNum){
			myEndNum = myRealEnd;
		}
		
		myPrev = myStartNum>1;
		myNext = myEndNum<myRealEnd;
		
		if(myPrev){
			prevStr = "<li class='prevBtn'>이전</li>";
		}
		
		for(var i=myStartNum; i<=myEndNum; i++){
			if(i == myPageNumValue){
				numStr += "<li class='pageNumBtn' style='font-weight:bold; color:red;'>"+i+"</li>";
			} else{
				numStr += "<li class='pageNumBtn'>"+i+"</li>";
			}
		}
		
		if(myNext){
			nextStr = "<li class='nextBtn'>다음</li>";
		}
		
		if(myTotal <= 0){
			noData += "<li>정보가 없습니다.</li>";
		}
		
		$("#myPaging").html(prevStr + numStr + nextStr + noData);
	}
	
	// 최근 1년이내 로또번호 total을 구하는 function
	function getYearTotal(){
		$.getJSON("/analysis/getYearTotal.json", function(count){
			yTotal = count;
		})
	}
	
	// 최근 1년이내 로또번호 total을 받아서  paging 하는 function
	function yPaging(pageNum, amount){
		var prevStr = "";
		var numStr = "";
		var nextStr = "";
		var noData = "";
		
		yEndNum = Math.ceil(pageNum/10.0)*10;
		yStartNum = yEndNum-9;
		yRealEnd = Math.ceil(yTotal*1.0/amount);
		
		if(yRealEnd < yEndNum){
			yEndNum = yRealEnd;
		}
		
		yPrev = yStartNum>1
		yNext = yEndNum<yRealEnd;
		
		if(yPrev){
			prevStr = "<li class='prevBtn'>이전</li>";
		}
		
		for(var i=yStartNum; i<=yEndNum; i++){
			if(i == yPageNumValue){
				numStr += "<li class='pageNumBtn' style='font-weight:bold; color:#4169E1;'>"+i+"</li>";
			} else{
				numStr += "<li class='pageNumBtn'>"+i+"</li>";
			}
		}
		
		if(yNext){
			nextStr = "<li class='nextBtn'>다음</li>";
		}
		
		if(yTotal <= 0){
			noData += "<li>정보가 없습니다.</li>";
		}
		
		$("#wPaging").html(prevStr + numStr + nextStr + noData);
	}
})







