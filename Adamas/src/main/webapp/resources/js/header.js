/**
 * 
 */

$(document).ready(function(){
	// .normal을 클릭했을 때
	$(".normal").on("click", function(){
		$(this).next("ul").toggle();
		$(this).toggleClass('special');
	})
	
	/*
	// .normal을 펼쳤을 때 그 외의 영역을 클릭하는 경우
	$("body").click(function(e){
		if(!$(e.target).hasClass('special')){
			$(".navUl").css("display", "none");
		}
	})
	*/
})