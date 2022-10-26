/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	// 로그인한 아이디 값을 저장하는 변수 
	var loginId = $("#loginId").val();
	// alert(loginId);
	// 선택 된 로또번호를 저장하는 배열
	var lotto = [];
	
	getMyLotto(loginId);
	
	// 선택을 클릭 했을 때
	$(".mylotto").on("click", ".myball", function(){
		$("#ball1").text($(this).data("myball1"));
		lotto[0] = $(this).data("myball1")
		$("#ball2").text($(this).data("myball2"));
		lotto[1] = $(this).data("myball2")
		$("#ball3").text($(this).data("myball3"));
		lotto[2] = $(this).data("myball3")
		$("#ball4").text($(this).data("myball4"));
		lotto[3] = $(this).data("myball4")
		$("#ball5").text($(this).data("myball5"));
		lotto[4] = $(this).data("myball5")
		$("#ball6").text($(this).data("myball6"));
		lotto[5] = $(this).data("myball6")
		
		// alert(lotto);
		myResult()
	})
	
	// 저장 된 로또번호 불러오는 함수
	function getMyLotto(id){
		$.getJSON("/analysis/mylotto/"+id+".json", function(list){
			var str = "";
			
			for(var i=0; i<list.length; i++){
				str += "<li>"+list[i].myball1+"</li>"
				str += "<li>"+list[i].myball2+"</li>"
				str += "<li>"+list[i].myball3+"</li>"
				str += "<li>"+list[i].myball4+"</li>"
				str += "<li>"+list[i].myball5+"</li>"
				str += "<li>"+list[i].myball6+"</li>"
				str += "<li class='myball' data-myball1="+list[i].myball1+" data-myball2="+list[i].myball2+" data-myball3="+list[i].myball3+" data-myball4="+list[i].myball4+" data-myball5="+list[i].myball5+" data-myball6="+list[i].myball6+">선택</li>"
				str += "<li>다음거</li>"
			}
			
			$(".mylotto").html(str);
		})
	}
	
	// 최근 1년이내 로또번호와 내가 선택한 번호를 비교해주는 함수
	function myResult(){
		$.getJSON("/analysis/getYearResult.json", function(list){
			var str = "";
			
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
						compareStr += "<span style='color: red'>"+arrNumber[j]+" </span>"
					} else{
						compareStr += "<span>"+arrNumber[j]+" </span>"
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
				
				str += "<li>"+list[i].lno+"</li>"
				str += "<li>"+list[i].lottoDay+"</li>"
				str += "<li>"+compareStr+"</li>"
				str += "<li>"+bonusStr+"</li>"
				str += "<li>번호일치 : "+totalStr+"</li>"
				str += "<li>등수 : "+rankStr+"</li>"
				str += "------------------------------------------------------"
			}
			
			$(".historyCompare").html(str);
		})
	}
	
})