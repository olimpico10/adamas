package org.adamas.mapper;

import org.adamas.model.LikeVO;
import org.apache.ibatis.annotations.Param;

public interface LikeMapper {

	// 좋아요 상태를 위한 DB작업 설계
	public int checkLike(@Param("bno")int bno, @Param("id")String id);
	
	// 좋아요 등록을 위한 DB작업 설계
	public int likeUp(LikeVO like);
	
	// 좋아요 취소를 위한 DB작업 설계
	public int likeDown(LikeVO like);
	
	// 좋아요 Total DB작업 설계
	public int getTotal(int bno);
}
