package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.RecommentsVO;
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

	// 댓글 수정
	@RequestMapping(value = "/replies/modify", method=RequestMethod.PUT)
	public ResponseEntity<String> replyModify(@RequestBody ReplyVO reply){
		System.out.println("댓글 수정 컨트롤러 : "+reply);
		
		int result = rs.replyModify(reply);
		
		return result==1? new ResponseEntity<>("success", HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 댓글 삭제
	@RequestMapping(value = "/replies/remove/{rno}", method=RequestMethod.DELETE)
	public ResponseEntity<String> replyRemove(@PathVariable int rno){
		System.out.println("컨트롤러 삭제 : "+rno);
		
		int result = rs.replyRemove(rno);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}

	// 대댓글 쓰기
	@RequestMapping(value = "/replies/newRecomment", method=RequestMethod.POST)
	public ResponseEntity<String> recommentWrite(@RequestBody RecommentsVO rcmt){
		
		int result =  rs.recommentWrite(rcmt);
		System.out.println(rcmt);
		
		return result == 1? new ResponseEntity<>("success",HttpStatus.OK)
						  : new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 대댓글 리스트
	@RequestMapping(value = "/replies/recomment/{rno}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<RecommentsVO>> getRecommentList(@PathVariable int rno){
		
		System.out.println("controller : "+rno+"번 댓글의 대댓글");
		
		return new ResponseEntity<>(rs.getRecommentList(rno),HttpStatus.OK);
	}
	
	// 대댓글 수정
	@RequestMapping(value = "/replies/modifyRecomment", method=RequestMethod.PUT)
	public ResponseEntity<String> recommentModify(@RequestBody RecommentsVO rcmt){
		System.out.println("대댓글 수정 컨트롤러 : "+rcmt);
		
		int result = rs.recommentModify(rcmt);
		
		return result==1? new ResponseEntity<>("success", HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 댓글 삭제
	@RequestMapping(value = "/replies/removeRecomment/{rcno}", method=RequestMethod.DELETE)
	public ResponseEntity<String> recommentRemove(@PathVariable int rcno){
		System.out.println("컨트롤러 삭제 : "+rcno);
		
		int result = rs.recommentRemove(rcno);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
