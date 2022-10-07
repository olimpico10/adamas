/**
 * summernote 에디터 관련 javascript
 */

$(document).ready(function(){
	$('#summernote').summernote({
		height: 700,
		minHeight: null,
		maxHeight: null,
		focus: true,
		lang: "ko-KR",
		placeholder: "최대 2048자까지 쓸 수 있습니다.",
		toolbar: [
			// [groupName, [list of button]]
			['fontname', ['fontname']],
			['fontsize', ['fontsize']],
			['style', ['bold', 'italic', 'underline','strikethrough', 'clear']],
			['color', ['forecolor','color']],
			['table', ['table']],
			['para', ['ul', 'ol', 'paragraph']],
			['height', ['height']],
			['insert',['picture','link','video']],
			['view', ['fullscreen', 'help']]
		],
		fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New','맑은 고딕','궁서','굴림체','굴림','돋움체','바탕체'],
		fontSizes: ['8','9','10','11','12','14','16','18','20','22','24','28','30','36','50','72'],
		callbacks: {
			// 이미지를 첨부하는 부분
			onImageUpload : function(files){		
				uploadSummernoteImageFile(files[0], this);
			},
			onPaste: function (e){
				var clipboardData = e.originalEvent.clipboardData;
				if (clipboardData && clipboardData.items && clipboardData.items.length){
					var item = clipboardData.items[0];
					if (item.kind === 'file' && item.type.indexOf('image/') !== -1){
						e.preventDefault();
					}
				}
			}
		} 
	})
	
	// 이미지 파일 업로드
	function uploadSummernoteImageFile(file, editor){
		data = new FormData();
		data.append("file", file);
		$.ajax({
			data : data,
			type : "POST",
			url : "/uploadSummernoteImageFile",
			contentType : false,
			processData : false,
			success : function(data){
				//항상 업로드 된 파일의 url이 있어야 한다
				$(editor).summernote('insertImage', data.url);
			}
		})
	}
})