package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.ReplyVO;
import org.adamas.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ReplyController {
	
	@Autowired
	ReplyService rs;
	
	// 댓글 쓰기
	@RequestMapping(value = "/replies/new", method=RequestMethod.POST)
	public ResponseEntity<String> replyWrite(@RequestBody ReplyVO reply){
		
		int result =  rs.replyWrite(reply);
		System.out.println(reply);
		
		return result == 1? new ResponseEntity<>("success",HttpStatus.OK)
						  : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 댓글 리스트
	@RequestMapping(value = "/replies/{bno}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<ReplyVO>> getList(@PathVariable int bno){
		
		System.out.println("controller : "+bno+"번 게시글의 리플");
		
		return new ResponseEntity<>(rs.getList(bno),HttpStatus.OK);

	}


}
