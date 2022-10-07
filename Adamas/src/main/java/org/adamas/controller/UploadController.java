package org.adamas.controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.JsonObject;

@Controller
public class UploadController {

	// summernote 이미지 업로드
	@RequestMapping(value="/uploadSummernoteImageFile", produces = "application/json")
	@ResponseBody
	public JsonObject uploadSummernoteImageFile(@RequestParam("file") MultipartFile multipartFile) {
		JsonObject jsonObject = new JsonObject();
		
		// 저장 될 외부 파일 경로
		String fileRoot = "D:\\adamas\\upload\\summernote_image\\";
		
		// 오리지널 파일명
		String originalFileName = multipartFile.getOriginalFilename();
		// 파일 확장자
		String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
		// 저장 될 파일명
		String savedFileName = UUID.randomUUID() + extension;
		
		File targetFile = new File(fileRoot + savedFileName);
		
		try {
			InputStream fileStream = multipartFile.getInputStream();
			// 파일저장
			FileUtils.copyInputStreamToFile(fileStream, targetFile);
			// contextroot + resources + 저장할 내부 폴더명
			jsonObject.addProperty("url", "/summernoteImage/"+savedFileName);
			jsonObject.addProperty("responseCode", "success");
		} catch(IOException e) {
			//저장된 파일 삭제
			FileUtils.deleteQuietly(targetFile);
			jsonObject.addProperty("responseCode", "error");
			e.printStackTrace();
		}
		
		return jsonObject;
	}
	
	
	// summernote 이미지 주소 생성
	@RequestMapping(value = "/summernoteImage", method = RequestMethod.GET)
	public ResponseEntity<byte[]> getFile(String savedFileName){
		System.out.println(savedFileName);
		
		File file = new File("D:\\adamas\\upload\\summernote_image\\"+savedFileName);
		
		ResponseEntity<byte[]> result = null;
		
		HttpHeaders headers = new HttpHeaders();
		try {
			// headers가 Content-Type의 종류를 알 수 있다(이미지 파일인지 아닌지) 
			headers.add("Content-Type", Files.probeContentType(file.toPath()));
			result = new ResponseEntity<>(FileCopyUtils.copyToByteArray(file), headers, HttpStatus.OK);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return result;
	}
	

}
