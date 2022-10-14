/**
 * 랜덤발생기
 */

$(document).ready(function(){
	// 고정수 저장 할 배열
	var fixedNum = [];
	// 제외수 저장 할 배열
	var excludedNum = [];
	// 고정수 활성화 버튼 변수
	var fixedBtn = 0;
	// 제외수 활성화 버튼 변수
	var excludedBtn = 0;
	
	// 고정수 클릭 했을 때
	$("#fixedBtn").on("click",function(){		
		fixedBtn = 1;
		excludedBtn = 0;
		
		$("#fixedBtn").css("opacity","1");
		$("#excludedBtn").css("opacity","0.2");
	})
	
	// 제외수 클릭 했을 때
	$("#excludedBtn").on("click",function(){		
		fixedBtn = 0;
		excludedBtn = 1;
		
		$("#excludedBtn").css("opacity","1");
		$("#fixedBtn").css("opacity","0.2");
	})
	
	// 번호 체크 상태 변할 때
	$(".chkNum").change(function(){
		var fixedStr = "";
		var excludedStr = "";
		
		if($(this).is(":checked")){		// checkbox 체크 될 때
			if(fixedBtn == 1){			// 고정수 버튼 활성화 상태
				alert("고정수 상태");
				if(fixedNum.length > 4){	
					$(this).prop("checked", false);
					alert("고정수는 5개까지만 선택 가능합니다");	
					
				} else{
					alert("고정수 체크한다"+$(this).val());
					fixedNum.push($(this).val());
					fixedNum.sort(function(a, b) {return a-b;});
					
				}
				
			} else if(excludedBtn == 1){	// 제외수 버튼 활성화 상태
				alert("제외수 상태");
				if(excludedNum.length > 34){
					$(this).prop("checked", false);
					alert("제외수는 35개까지만 선택 가능합니다");
					
				} else{
					alert("제외수 체크한다"+$(this).val());
					excludedNum.push($(this).val());
					excludedNum.sort(function(a, b) {return a-b;});
					
				}
				
			} else{						// 고정수, 제외수 비 활성화 상태
				alert("고정수 버튼이나 제외수 버튼을 먼저 눌러 주세요");
				$(this).prop("checked", false);
			}
			
		} else{							// checkbox 체크 해제 될 때
			alert("체크해제한다"+$(this).val());
				fixedNum = fixedNum.filter(item => item != $(this).val());
				excludedNum = excludedNum.filter(item => item != $(this).val());
			
		}
		
		// 내가 선택한 고정수 화면에 표시하기 위한 반복문
		for(var i=0; i<fixedNum.length; i++){
			fixedStr += "<li>"
			fixedStr += "<img src='/resources/images/ball"+parseInt(fixedNum[i])+".png'>"
			fixedStr += "</li>"
		}
		
		// 내가 선택한 제외수 화면에 표시하기 위한 반복문
		for(var i=0; i<excludedNum.length; i++){
			excludedStr += "<li>"
			excludedStr += "<img src='/resources/images/ball"+parseInt(excludedNum[i])+".png'>"
			excludedStr += "</li>"
		}
		
		$("#fixedNum").html(fixedStr);
		$("#excludedNum").html(excludedStr);
		alert("고정수 선택상태"+fixedNum);
		alert("제외수 선택상태"+excludedNum);
	})
	
	// 초기화 버튼을 눌렀을 때
	$("#reset").on("click",function(){
		var str = "";
		fixedNum = [];
		excludedNum = [];
		
		alert("초기화합니다");
		
		$("input[type='checkbox']:checked").each(function(){
			$(this).prop("checked", false);
		})
		
		$(".checkedNum").html(str);
		alert("고정수"+fixedNum);
		alert("제외수"+excludedNum);
	})
	
	// 번호 생성 버튼을 눌렀을 때
	$("#action").on("click",function(){
		
		// 랜덤 + 고정수 번호를 저장할 배열
		var lotto = [];
		alert("번호 발생 전 로도번호"+lotto);
		// 반복문을 위한 변수
		var count = 0;
		// 번호중복, 제외수 방지용 변수
		var prevent = true;
		//
		var str = "";
		
		alert("고정수 배열 길이"+fixedNum.length);
		
		// (6-고정수)개의 로또번호를 얻기위한 반복문
		while(count < 6-fixedNum.length){
			var ranNum;
			
			// 랜덤번호 추철
			ranNum = parseInt(Math.random()*45)+1;
			
			// 중복확인
			for(var i=0; i<lotto.length; i++){
				if(lotto[i] == ranNum){
					prevent = false;
				}
			}
			
			// 고정수 중복 확인
			for(var i=0; i<fixedNum.length; i++){
				if(fixedNum[i] == ranNum){
					prevent = false;
				}
			}
			
			// 제외수 확인
			for(var i=0; i<excludedNum.length; i++){
				if(excludedNum[i] == ranNum){
					prevent = false;
				}
			}
			
			// 중복되거나 제외수가 아니면 로또 번호추가
			if(prevent){
				lotto.push(ranNum);
				count++;
			}
			
			prevent = true;
		}

		alert("발생 후"+lotto);
		// 발생 한 로또 번호와 고정 수를 합친다
		lotto.push(...fixedNum);
		lotto.sort(function(a, b) {return a-b;});
		
		// 로또번호 화면에 표시하기 위한 반복문
		for(var i=0; i<lotto.length; i++){
			str += "<li>"
			str += "<img src='/resources/images/ball"+parseInt(lotto[i])+".png'>"
			str += "</li>"
		}
		
		$("#lotto").html(str);
		alert("발생 수와 고정 수 합친 후 : "+lotto);
	})
	
})