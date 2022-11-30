/**
 * 
 */

$(document).ready(function(){
	
	var bnoValue = parseInt($("#bno").val());
	
	$("#modifyBtn").on("click", function(){
		if($("#modifyTitle").val().length == 0){
			alert("제목을 입력해주세요");
			return false;
		}
		
		$("#modifyForm").submit();
	})
	
	$("#cancelBtn").on("click", function(){
		history.back();
	})
})