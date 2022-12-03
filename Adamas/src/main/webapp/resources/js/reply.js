/**
 * 댓글 관련 javascript 처리
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	
	var idValue = $("#loginID").val();
	var nickValue = $("#loginNick").val();
	var bnoValue = $("#bno").val();
	var rnoList = [];	// 대댓글 리스트 하나하나 for문을 사용해서 부르기 위해 리스트 선언 
	
	// getList()와 getRecommentList()는 항상 같이 불러온다. 
	getList(bnoValue);
	for(i=0; i<rnoList.length; i++){
		getRecommentList(rnoList[i]);
	}
	
	// 댓글 쓰기버튼을 클릭
	$("#regComment").on("click", function(){
		var commentValue = $("#enterComment").val();
		if(!idValue){
			alert("로그인이 필요한 서비스입니다.");
		} else{
			if(!commentValue){
				alert("내용을 입력해 주세요.");
			} else{
				add({bno:bnoValue, comment:commentValue, id:idValue, nick:nickValue});
			}
		}
	})
	
	// 댓글 수정버튼 클릭
	$("#comments").on("click", ".update", function(){
		var rnoValue = $(this).data("rno");
		var commentValue = $(this).data("comment");
		
		getList(bnoValue)		// 수정버튼을 누른 상태에서 다른 수정버튼을 누르면 댓글 수정하는게 여러개가 열릴 수 있으므로 getList() 사용했다.		
		for(i=0; i<rnoList.length; i++){
			getRecommentList(rnoList[i]);
		}
		
		$("#comment"+rnoValue).replaceWith("<li class='commentsLi'><textarea id='commentModify'>"+commentValue+"</textarea></li>");
		$("button[class='update'][data-rno="+rnoValue+"]").replaceWith("<button type='button' id='reg'>등록</button>");
		$("button[class='remove'][data-rno="+rnoValue+"]").replaceWith("<button type='button' id='cancel'>취소</button>");
		$("button[class='recomment'][data-rno="+rnoValue+"]").remove();
		
		// 댓글 수정 클릭 후 등록을 클릭
		$("#reg").on("click", function(){
			var modifyValue = $("#commentModify").val();
			
			modify({rno:rnoValue, comment:modifyValue});
		})
		
		// 댓글 수정 클릭 후 취소를 클릭
		$("#cancel").on("click", function(){
			getList(bnoValue);		
			for(i=0; i<rnoList.length; i++){
				getRecommentList(rnoList[i]);
			}
		})
	})
	
	// 댓글 삭제버튼을 클릭
	$("#comments").on("click", ".remove", function(){
		var rnoValue = $(this).data("rno");
		
		remove(rnoValue);
	})
	
	// 대댓글 쓰기 클릭
	$("#comments").on("click", ".recomment", function(){
		var rnoValue = $(this).data("rno");
		var str = "";
		
		if(!idValue){
			alert("로그인이 필요한 서비스입니다.");
		} else{
			getList(bnoValue);		// 대댓글을 누른 상태에서 다른 대댓글 쓰기를 누르면 여러개가 열릴 수 있으므로 getList() 불렀다.
			for(i=0; i<rnoList.length; i++){
				getRecommentList(rnoList[i]);
			}

			str += "<div class='enterRecomment_wrap'>"
			str += "<li class='reCommentBox' id='reCommentNick'>"+nickValue+"</li>"
			str += "<li class='reCommentBox'><textarea id='enterRecomment'></textarea></li>"
			str += "<li class='reCommentBox'><button type='button' id='regRecomment'>등록</button>"
			str += "<button type='button' id='cancelRecomment'>취소</button></li>"
			str += "</div>"
				
			// alert("이 댓글의 번호는 "+rnoValue);
			$("#buttonLi"+rnoValue).after(str);
				
			// 대댓글 등록 클릭
			$("#regRecomment").on("click", function(){
				recommentValue = $("#enterRecomment").val();
				addRecomment({rno:rnoValue, recomment:recommentValue, id:idValue, nick:nickValue});
			})
				
			// 대댓글 취소 클릭
			$("#cancelRecomment").on("click", function(){
				getList(bnoValue);
				for(i=0; i<rnoList.length; i++){
					getRecommentList(rnoList[i]);
				}
			})
		}
	})
	
	// 대댓글 수정버튼 클릭
	$("#comments").on("click", ".reUpdate", function(){
		var rcnoValue = $(this).data("rcno");
		var recommentValue = $(this).data("recomment");
		// alert("대댓글 수정 눌렀다 "+rcnoValue);

		getList(bnoValue)		// 수정버튼을 누른 상태에서 다른 수정버튼을 누르면 댓글 수정하는게 여러개가 열릴 수 있으므로 getList() 사용했다.		
		for(i=0; i<rnoList.length; i++){
			getRecommentList(rnoList[i]);
		}
		
		$("#recomment"+rcnoValue).replaceWith("<li class='recommentsLi'><textarea id='recommentModify'>"+recommentValue+"</textarea></li>");
		$("button[class='reUpdate'][data-rcno="+rcnoValue+"]").replaceWith("<button type='button' id='regRecomment'>등록</button>");
		$("button[class='reRemove'][data-rcno="+rcnoValue+"]").replaceWith("<button type='button' id='cancelRecomment'>취소</button>");

		// 대댓글 수정 클릭 후 등록을 클릭
		$("#regRecomment").on("click", function(){
			var modifyRecommentValue = $("#recommentModify").val();
			
			modifyRecomment({rcno:rcnoValue, recomment:modifyRecommentValue});
		})
		
		// 대댓글 수정 클릭 후 취소를 클릭
		$("#cancelRecomment").on("click", function(){
			getList(bnoValue);		
			for(i=0; i<rnoList.length; i++){
				getRecommentList(rnoList[i]);
			}			
		})
	})
	
	// 대댓글 삭제버튼을 클릭
	$("#comments").on("click", ".reRemove", function(){
		var rcnoValue = $(this).data("rcno");
		
		removeRecomment(rcnoValue);
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
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
					
					$("#enterComment").val("");
				}
			}
		})
	}
	
	// 해당 게시글 댓글 리스트 function
	function getList(bno){
		$.getJSON("/replies/"+bno+".json", function(data){
			var str = "";
			rnoList = [];
			
			for(var i=0; i<data.length; i++){
				str += "<li class='cmtLi' id='commentNick"+data[i].rno+"' data-rno="+data[i].rno+">"
				str	+= "<span>"+data[i].nick+" </span>"
				if(data[i].id == idValue){
					str += "<span class='writer'> 작성자 </span>"
				}
				str += "</li>"
				str += "<li class='commentsLi' id='comment"+data[i].rno+"' data-rno="+data[i].rno+"><textarea class='commentTextarea' readonly>"+data[i].comment+"</textarea></li>"
				str += "<li class='cmtDateLi'>"+data[i].replydate+"<li>"
				str += "<li class='btnLi' id='buttonLi"+data[i].rno+"'>"
				
				if(data[i].id == idValue){
					str += "<button type='button' class='update' data-rno="+data[i].rno+" data-comment='"+data[i].comment+"'>수정</button>"
					str += "<button type='button' class='remove' data-rno="+data[i].rno+">삭제</button>"
				}
				
				str += "<button type='button' class='recomment' data-rno="+data[i].rno+">답글쓰기</button>"
				str += "</li>"
				
				rnoList.push(data[i].rno);		// 대댓글 리스트를 부르기 위해서 리스트에 rno값을 저장
			}
			
			$("#comments").html(str);
			// alert("이 게시글의 rno 값들은 : "+rnoList);
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
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
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
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
				}
			}
		})
	}
	
	// 대댓글 쓰기 function
	function addRecomment(reply){
		$.ajax({
			type: "post",
			url: "/replies/newRecomment",
			data: JSON.stringify(reply),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					$("#enterRecomment").val("");
					
					getList(bnoValue);				
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
				}
			}
		})
	}

	// 대댓글  리스트 function
	function getRecommentList(rno){
		$.getJSON("/replies/recomment/"+rno+".json", function(recomments){
			
			for(var i=0; i<recomments.length; i++){
				var rcstr = ""
				
				rcstr += "<div class='recomment_wrap'>"
				rcstr += "<li class='recmtLi' id='recommentNick"+recomments[i].rcno+"' data-rcno"+recomments[i].rcno+">"
				rcstr += "<span>"+recomments[i].nick+" </span>"
				
				if(recomments[i].id == idValue){
					rcstr += "<span class='writer'> 작성자</span>"
				}
				
				rcstr += "</li>"
				rcstr += "<li class='recommentsLi' id='recomment"+recomments[i].rcno+"' data-rcno="+recomments[i].rcno+"><textarea class='recommentTextarea' readonly>"+recomments[i].recomment+"</textarea></li>"
				rcstr += "<li class='recmtDateLi'>"+recomments[i].recommentDate+"<li>"	
				rcstr += "<li class='rebtnLi' id='rebuttonLi"+recomments[i].rcno+"'>"
				
				if(recomments[i].id == idValue){
					rcstr += "<button type='button' class='reUpdate' data-rcno="+recomments[i].rcno+" data-recomment='"+recomments[i].recomment+"'>수정</button>"
					rcstr += "<button type='button' class='reRemove' data-rcno="+recomments[i].rcno+">삭제</button>"
				}
				
				rcstr += "</li>"
				rcstr += "</div>"
				
				$("#buttonLi"+recomments[i].rno).after(rcstr);
			}
		})
	}
	
	// 대댓글 수정 function
	function modifyRecomment(recomment){
		$.ajax({
			type: "put",
			url: "/replies/modifyRecomment",
			data: JSON.stringify(recomment),
			contentType: "application/json; charset=utf-8",
			success: function(result){
				if(result == "success"){
					alert("댓글을 수정했습니다.");
					getList(bnoValue);					
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
				}
			}
		})
	}
	
	// 대댓글 삭제 function
	function removeRecomment(rcno){
		$.ajax({
			type: "delete",
			url: "/replies/removeRecomment/"+rcno,
			success: function(result){
				if(result == "success"){
					alert("댓글을 삭제 했습니다.");
					getList(bnoValue);				
					for(i=0; i<rnoList.length; i++){
						getRecommentList(rnoList[i]);
					}
				}
			}
		})
	}
})