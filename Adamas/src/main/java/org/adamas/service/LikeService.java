package org.adamas.service;

import org.adamas.model.LikeVO;

public interface LikeService {

	// 좋아요 상태를 위한 설계
	public int checkLike(int bno, String id);
	
	// 좋아요 등록을 위한  설계
	public int likeUp(LikeVO like);
	
	// 좋아요 취소를 위한 설계
	public int likeDown(LikeVO like);

	// 좋아요 Total 설계
	public int getTotal(int bno);
}
