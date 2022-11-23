/**
 * 
 */

$(document).ready(function(){
	
	var bnoValue = parseInt($("#bno").val());
	
	// moreBtn을 눌렀을 때
	$("#moreBtn").on("click", function(){
		$(this).next("ul").toggle();
		return false;
	})
	
	// moreOpt를 선택했을 때
	$(".moreOpt").on("click", function(){
		$("#moreOpt").css("display", "none");
	})
	
	// modify를 선택했을 때
	$("#modify").on("click", function(){
		location.href = "/board/modify?bno="+bnoValue;
	})
	
	// remove를 선택했을 때
	$("#remove").on("click", function(){
		$("#removeForm").submit();
	})
	
	// copyUrl를 선택했을 때
	$("#copyUrl").on("click", function(){
		clip();
	})
	
	// mortOpt 영역외 다른 곳을 클릭하는 경우
	$("body").click(function(e){
		if(!$(e.target).hasClass('moreOpt')){
			$("#moreOpt").css("display", "none");
		}
	})

	// top 버튼을 눌렀을 때
	$("#toTheTop").on("click", function(){
		$('html').scrollTop(0);
	})
	
	function clip(){
		var url = '';
		var textarea = document.createElement("textarea");
		
		document.body.appendChild(textarea);		// </body> 바로 위에 textarea를 추가
		url = window.document.location.href;		// url에는 현재 주소값을 넣어줌
		textarea.value = url;						// textarea 값에 url를 넣어줌
		textarea.select();							// textarea를 설정
		document.execCommand("copy");				// 복사
		document.body.removeChild(textarea);		// textarea 요소를 없앤다
		
		alert("URL이 복사되었습니다")
	}
})