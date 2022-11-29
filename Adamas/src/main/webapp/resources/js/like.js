/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});

	var bnoValue = $("#bno").val();
	var idValue = $("#loginID").val();
	var likeValue;
	var likeTotalValue;
	
	checkLike(bnoValue, idValue);
	getTotal(bnoValue);
	
	// 라이크 버튼을 클릭했을 때
	$("#likeBtn").on("click", function(){
		like({bno:bnoValue, id:idValue});
		checkLike(bnoValue, idValue);
		getTotal(bnoValue);
	})
	
	// 게시물에 로그인한 아이디의 좋아요 상태를 보여주는 checkLike function
	function checkLike(bno, id){
		$.getJSON("/like/checkLike/"+bno+"/"+id+".json", function(data){
			likeValue = data;
			
			if(likeValue>0){
				// alert("현재 이 게시글의 좋아요 상태입니다");
				$("#likeImg").attr("src","/resources/images/star.png");
			} else{
				// alert("현재 이 게시글의 좋아요 하지 않은 상태입니다");
				$("#likeImg").attr("src","/resources/images/nstar.png");
			}
		})
	}
	
	// 좋아요, 좋아요 취소 like function
	function like(like){
		if(!idValue){
			alert("로그인이 필요한 서비스입니다.");
		} else{
			if(likeValue == 0){
				$.ajax({
					type: "post",
					url: "/like/likeUp",
					data : JSON.stringify(like),
					contentType : "application/json; charset=utf-8",
					success: function(result){
						if(result == "success"){
							alert("좋아요");
						}
					}
				})
			} else{
				$.ajax({
					type : "delete",
					url : "/like/likeDown",
					data : JSON.stringify(like),
					contentType : "application/json; charset=utf-8",
					success: function(result){
						if(result == "success"){
							alert("좋아요 취소");
						}
					}
				})
			}
		}
	}
	
	// 해당 게시글 좋아요 total function
	function getTotal(bno){
		$.getJSON("/like/getTotal/"+bno+".json", function(count){
			likeTotalValue = count;
			
			$("#likeTotal").html(likeTotalValue);
		})
	}
})