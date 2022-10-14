/**
 * 번호발생기(직접선택)
 */

$(document).ready(function(){
	var checkedNum = [];
	
	// 번호 체크 변할 때
	$(".chkNum").change(function(){
		var str="";
		
		if($(this).is(":checked")){		// checkbox 체크 될 때
			if(checkedNum.length > 5){
				$(this).prop("checked", false);
				alert("6개까지만 선택 가능합니다");				
			}else{						// checkbox 체크 해제 될 때
				alert("체크한다"+$(this).val());
				checkedNum.push($(this).val());
				checkedNum.sort(function(a, b) {return a-b;});
			}					
		}else{							// checkbox 체크 해제 될 때
			alert("체크해제한다"+$(this).val());
			checkedNum = checkedNum.filter(item => item != $(this).val());
		}
		
		// 내가 선택한 번호 화면에 표시하기 위한 반복문
		for(var i=0; i<checkedNum.length; i++){
			str += "<li>"
			str += "<img src='/resources/images/ball"+parseInt(checkedNum[i])+".png'>"
			str += "</li>"
		}

		$(".checkedNum").html(str);
		alert(checkedNum);
	})
	
	// 초기화 버튼을 눌렀을 때
	$("#reset").on("click",function(){
		var str=""
		checkedNum = [];
		
		alert("초기화합니다");
		
		$("input[type='checkbox']:checked").each(function(){
			$(this).prop("checked", false);
		})
		
		$(".checkedNum").html(str);
		alert(checkedNum);
	})
})
