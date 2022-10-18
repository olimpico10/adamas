/**
 * lotto 관련 javascript
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	compareHistory();
	
	// 과거 당첨결과 비교
	function compareHistory(){
		$.getJSON("/lotto/historyCompare.json", function(history){
			var str = "";
			
			// history 배열 불러오기
			for(var i=0; i<history.length; i++){
				// 순위를 구하기 위한 변수
				var rank = 0
				// 2등 보너스 번호와 발생기의 번호가 일치하는지 판단하는 변수 
				var secondPrize = false;
				var rStr = "";
				
				// history[i].ball(j) 를 실행하기 위한 반복문
				for(var j=1; j<7; j++){
					// 배열의 j번째 공과 발생기의 번호가 일치하는지 판단하는 변수 
					// ex) history[0].ball1 == $("#geBall1).val() 가 같으면 true
					var prize = false;

					// history[i].ball(j) 와 $("#geBall(k)).val() 를 비교하기 위한 반복문
					for(var k=1; k<7; k++){
						
						if(eval("history["+i+"].ball"+j) == $("#geBall"+k).val()){
							rank++;
							prize = true;							
						}
					}
					
					if(prize) {
						rStr += "<li>"
						rStr += "<img src='/resources/images/ball"+eval("history["+i+"].ball"+j)+".png'>"
						rStr += "</li>"
					}else {
						rStr += "<li>"
						rStr += "<img src='/resources/images/nBall"+eval("history["+i+"].ball"+j)+".png'>"
						rStr += "</li>"
					}

				}				
				
				// history[i].bonus 와 $("#geBall(k)).val() 를 비교하기 위한 반복문
				for(var k=1; k<7; k++){
					if(history[i].bonus == $("#geBall"+k).val()){
						secondPrize = true;
					}
				}
				
				// 2등 보너스 볼 판단이 true일 때
				if(secondPrize){
					rStr += "<li>+</li>"
					rStr += "<li>"
					rStr += "<img src='/resources/images/ball"+history[i].bonus+".png'>"
					rStr += "</li>"
				}else{
					rStr += "<li>+</li>"
					rStr += "<li>"
					rStr += "<img src='/resources/images/nBall"+history[i].bonus+".png'>"
					rStr += "</li>"
				}
				
				// rank값이 3이상 일 때
				if(rank >= 3){
					console.log(i+"번째 배열의 랭크점수는 "+rank);
					str += "<li>"+history[i].lno+"회</>"
					str += rStr;
					
					if(rank == 3){
						str += "<li>5등</>";
					} else if(rank == 4){
						str += "<li>4등</>";
					} else if(rank == 5 && secondPrize == false){
						str += "<li>3등</>";
					} else if(rank == 5 && secondPrize == true){
						str += "<li>2등</>";
					} else{
						str += "<li>1등</>";
					}
				}
				
				if(str === ""){
					str += "<li>검색 된 자료가 없습니다.</li>"
				}
			}
			
			$(".compare").html(str);
		})
	}
	
	/* eval 대체 연구중
	//console.log(history[i].ball1);
	
	//if('history'.concat('[',i,']','.ball',j+1) == 14){
		//alert("일치합니다");
	//}
	// 'history'.concat('[',i,']','.ball',j+1)
	//alert('history'.concat('[',i,']','.ball',j+1));
	
	new Funciton 
	
	var ball = "history["+i+"].ball"+j;
	var fBall = new Function(ball);
	
	console.log(fBall);
	
	
	//console.log(eval("history["+i+"].ball"+(j+1)));
	//console.log("history["+i+"].ball"+(j+1));
	// alert('history'.concat('[',i,']','.ball',j+1).val());
	*/
})


