/**
 * 번호발생기(직접선택)
 */

$(document).ready(function(){
	// 선택 한 번호 저장할 배열
	var checkedNum = [];
	// 로그인 한 ID 저장하는 변수
	var loginId = $("#loginId").val();
	
	//alert(loginId);
	
	// 번호 체크 변할 때
	$(".chkNum").change(function(){
		var str="";
		
		if($(this).is(":checked")){		// checkbox 체크 될 때
			if(checkedNum.length > 5){
				$(this).prop("checked", false);
				alert("6개까지만 선택 가능합니다");				
			}else{						// checkbox 체크 해제 될 때
				//alert("체크한다"+$(this).val());
				checkedNum.push($(this).val());
				checkedNum.sort(function(a, b) {return a-b;});
			}					
		}else{							// checkbox 체크 해제 될 때
			//alert("체크해제한다"+$(this).val());
			checkedNum = checkedNum.filter(item => item != $(this).val());
		}
		
		// 내가 선택한 번호 화면에 표시하기 위한 반복문
		for(var i=0; i<checkedNum.length; i++){
			str += "<li>"
			str += "<img class='ballImg' src='/resources/images/ball"+parseInt(checkedNum[i])+".png'>"
			str += "</li>"
		}

		$(".checkedNum").html(str);
		//alert(checkedNum);
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
		//alert(checkedNum);
	})
	
	$("#storage").on("click",function(){
		if(loginId == null || loginId == ""){
			alert("로그인이 필요한 서비스입니다.");
		} else{
			if(checkedNum.length==6){
				storage({myball1:checkedNum[0], myball2:checkedNum[1], myball3:checkedNum[2], myball4:checkedNum[3], myball5:checkedNum[4], myball6:checkedNum[5], id:loginId});
			} else{
				alert("6개의 번호를 선택해야 합니다");
				return false;
			}
		}
	})
	
	$("#history").on("click",function(){
		if(checkedNum.length==6){
			this.href = "/lotto/compare?geBall1="+checkedNum[0]+"&geBall2="+checkedNum[1]+"&geBall3="+checkedNum[2]+"&geBall4="+checkedNum[3]+"&geBall5="+checkedNum[4]+"&geBall6="+checkedNum[5];
			window.open(this.href, '_blank', 'width=800', 'height=auto');
			return false;
		}else{
			alert("6개의 번호를 선택해야 합니다");
		}
	})
	
	// 발생 된 번호를 저장하기 위한 함수
	function storage(myLotto){
		
		$.ajax({
			type: "post",
			url: "/lotto/Storage",
			data: JSON.stringify(myLotto),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("저장했습니다");
				}
			}
		})
	}
})
