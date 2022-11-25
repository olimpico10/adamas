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
		var commentValue = $(this).data("comment");
		
		getList(bnoValue)		// 수정버튼을 누른 상태에서 다른 수정버튼을 누르면 댓글 수정하는게 여러개가 열릴 수 있으므로 getList() 사용했다.
		$("li[data-rno="+rnoValue+"]").replaceWith("<li class='commentsLi'><textarea id='commentModify'>"+commentValue+"</textarea></li>");
		$("button[class='update'][data-rno="+rnoValue+"]").replaceWith("<button type='button' id='reg'>등록</button>");
		$("button[class='remove'][data-rno="+rnoValue+"]").replaceWith("<button type='button' id='cancel'>취소</button>");
		
		// 댓글 수정 클릭 후 등록을 클릭
		$("#reg").on("click", function(){
			var modifyValue = $("#commentModify").val();
			
			modify({rno:rnoValue, comment:modifyValue});
		})
		// 댓글 수정 클릭 후 취소를 클릭
		$("#cancel").on("click", function(){
			getList(bnoValue);
		})
	})
	
	// 댓글 삭제버튼을 클릭
	$("#comments").on("click", ".remove", function(){
		var rnoValue = $(this).data("rno");
		
		remove(rnoValue);
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
				str += "<li class='commentsLi' data-rno="+data[i].rno+">"+data[i].comment+"</li>"
				str += "<li class='commentsLi'>"+data[i].replydate+"<li>"
				str += "<li class='commentsLi'>"
				str += "<button type='button' class='update' data-rno="+data[i].rno+" data-comment='"+data[i].comment+"'>수정</button>"
				str += "<button type='button' class='remove' data-rno="+data[i].rno+">삭제</button>"
				str += "</li>"					
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
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("댓글을 수정했습니다.");
					getList(bnoValue);
				}
			}
		})
	}
	
	// 댓글 삭제 function
	function remove(rno){
		$.ajax({
			type: "delete",
			url: "/replies/remove/"+rno,
			success: function(result){
				if(result == "success"){
					alert("댓글을 삭제 했습니다.");
					getList(bnoValue);
				}
			}
		})
	}
})