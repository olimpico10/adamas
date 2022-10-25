/**
 * 
 */

$(document).ready(function(){
	$.ajaxSetup({async : false});
	// 로그인한 아이디 값을 저장하는 변수 
	var loginId = $("#loginId").val();
	// alert(loginId);
	// 선택 된 로또번호를 저장하는 배열
	var lotto = [];
	
	getMyLotto(loginId);
	getlnoList()
	
	// 선택을 클릭 했을 때
	$(".mylotto").on("click", ".myball", function(){
		$("#ball1").text($(this).data("myball1"));
		lotto[0] = $(this).data("myball1")
		$("#ball2").text($(this).data("myball2"));
		lotto[1] = $(this).data("myball2")
		$("#ball3").text($(this).data("myball3"));
		lotto[2] = $(this).data("myball3")
		$("#ball4").text($(this).data("myball4"));
		lotto[3] = $(this).data("myball4")
		$("#ball5").text($(this).data("myball5"));
		lotto[4] = $(this).data("myball5")
		$("#ball6").text($(this).data("myball6"));
		lotto[5] = $(this).data("myball6")
		
		alert(lotto);
	})
	
	// 저장 된 로또번호 불러오는 함수
	function getMyLotto(id){
		$.getJSON("/analysis/mylotto/"+id+".json", function(list){
			var str = "";
			
			for(var i=0; i<list.length; i++){
				str += "<li>"+list[i].myball1+"</li>"
				str += "<li>"+list[i].myball2+"</li>"
				str += "<li>"+list[i].myball3+"</li>"
				str += "<li>"+list[i].myball4+"</li>"
				str += "<li>"+list[i].myball5+"</li>"
				str += "<li>"+list[i].myball6+"</li>"
				str += "<li class='myball' data-myball1="+list[i].myball1+" data-myball2="+list[i].myball2+" data-myball3="+list[i].myball3+" data-myball4="+list[i].myball4+" data-myball5="+list[i].myball5+" data-myball6="+list[i].myball6+">선택</li>"
				str += "<li>다음거</li>"
			}
			
			$(".mylotto").html(str);
		})
	}
	
	// 최근 1년이내 로또번호와 내가 선택한 번호를 비교해주는 함수
	function getlnoList(){
		$.getJSON("/analysis/getYearResult.json", function(list){
			var str = "";
			
			for(var i=0; i<list.length; i++){
				str += "<li>"+list[i].lno+"</li>"
				str += "<li>"+list[i].lottoDay+"</li>"
				str += "<li>"+list[i].ball1+", "+list[i].ball2+", "+list[i].ball3+", "+list[i].ball4+", "+list[i].ball5+", "+list[i].ball6+"</li>"			
			}
			
			$(".historyCompare").html(str);
		})
	}
	
})