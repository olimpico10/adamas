package org.adamas.service;

import org.adamas.mapper.LikeMapper;
import org.adamas.model.LikeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeServiceimpl implements LikeService{
	@Autowired
	LikeMapper lm;
	
	// 좋아요 상태를 위한 추상메서드 구현
	public int checkLike(int bno, String id) {
		
		return lm.checkLike(bno, id);
	}
	
	// 좋아요 등록을 위한 추상메서드 구현
	public int likeUp(LikeVO like) {
		
		return lm.likeUp(like);
	}
	
	// 좋아요 취소를 위한 추상메서드 구현
	public int likeDown(LikeVO like) {
		
		return lm.likeDown(like);
	}

	// 좋아요 Total을 위한 추상메서드 구현
	public int getTotal(int bno) {
		
		return lm.getTotal(bno);
	}
}
