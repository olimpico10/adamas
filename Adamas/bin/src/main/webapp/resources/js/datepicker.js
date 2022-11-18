/**
 * datepicker 관련 javascript
 */

$(document).ready(function(){

	$(function(){
		$("#birth").datepicker({
			yearRange: 'c-122: c+0',
			changeMonth: true,
			changeYear: true,
			dateFormat: "yymmdd"
		});
	})
})