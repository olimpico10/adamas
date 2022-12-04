/**
 * 
 */


$(document).ready(function(){
	
	$("#writeBtn").on("click", function(){
		if($("#writeTitle").val().length == 0){
			alert("제목을 입력해 주세요");
			return false;
		}
		
		$("#writeForm").submit();
	})
	
	$("#cancelBtn").on("click", function(){
		history.back();
	})
})