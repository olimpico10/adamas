/**
 * 댓글 관련 javascript 처리
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	var idValue = $("#loginID").val();
	var nickValue = $("#loginNick").val();
	var bnoValue = $("#bno").val();
	
	getList(bnoValue);
	
	// 댓글 쓰기버튼을 클릭
	$("#regComment").on("click", function(){
		var commentValue = $("#enterComment").val();
		
		add({bno:bnoValue, comment:commentValue, id:idValue, nick:nickValue});
	})
	
	// 댓글 수정버튼 클릭
	$("#comments").on("click", ".update", function(){
		var rnoValue = $(this).data("rno");
		var replyValue = $(this).data("reply");
		
		alert("rno : "+rnoValue);
		alert("댓글내용 : "+replyValue);
	})
	
	// 댓글 쓰기 function
	function add(reply){
		$.ajax({
			type: "post",
			url: "/replies/new",
			data: JSON.stringify(reply),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("댓글쓰기 성공 - 이 알러트 대신 화면에 뿌리기로 바꿀거다");
					getList(bnoValue);
					$("#enterComment").val("");
				}
			}
		})
	}
	
	// 해당 게시글 댓글 리스트 function
	function getList(bno){
		$.getJSON("/replies/"+bno+".json", function(data){
			var str = "";
			
			for(var i=0; i<data.length; i++){
				str += "<li class='commentsLi' id='commentNick'>"+data[i].nick+"</li>"
				str += "<li class='commentsLi'>"+data[i].comment+"</li>"
				str += "<li class='commentsLi'>"+data[i].replydate+"<li>"
				str += "<li><button type='button' class='update' value='수정' data-rno="+data[i].rno+" data-reply='"+data[i].comment+"'></button></li>"					
			}
			
			$("#comments").html(str);
		})
	}
	
	// 댓글 수정 function
	function modify(reply){
		$.ajax({
			type: "put",
			url: "/replies/modify",
			data: JSON.stringify(reply),
			contentType: "application/json; charset=utf-8"
		})
	}
})