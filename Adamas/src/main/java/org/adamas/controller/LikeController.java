package org.adamas.controller;

import org.adamas.model.LikeVO;
import org.adamas.service.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LikeController {
	@Autowired
	LikeService ls;
	
	// 좋아요 상태 확인
	@RequestMapping(value = ("/like/checkLike/{bno}/{id}"), method=RequestMethod.GET)
	public ResponseEntity<Integer> checkLike(@PathVariable int bno, @PathVariable String id){
		System.out.println("Like 컨트롤러 : "+bno);
		System.out.println("Like 컨트롤러 : "+id);
		
		return new ResponseEntity<>(ls.checkLike(bno, id),HttpStatus.OK);
	}

	// 좋아요 등록
	@RequestMapping(value = "/like/likeUp", method=RequestMethod.POST)
	public ResponseEntity<String> likeUp(@RequestBody LikeVO like){
		// insert가 성공했으면 result변수에 1저장
		// insert가 실패했으면 result변수에 0저장
		int result = ls.likeUp(like);
		
		System.out.println(like);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
	// 좋아요 취소
	@RequestMapping(value = "/like/likeDown", method=RequestMethod.DELETE)
	public ResponseEntity<String> likeDown(@RequestBody LikeVO like){
		System.out.println("취소="+like);
		// delete가 성공했으면 result변수에 1저장
		// delete가 실패했으면 result변수에 0저장
		int result = ls.likeDown(like);
		
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
				: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	}	

	// 좋아요 Total
	@RequestMapping(value = "/like/getTotal/{bno}", method= RequestMethod.GET)
	public ResponseEntity<Integer> getTotal(@PathVariable int bno){
		
		return new ResponseEntity<>(ls.getTotal(bno), HttpStatus.OK);
	}
}
