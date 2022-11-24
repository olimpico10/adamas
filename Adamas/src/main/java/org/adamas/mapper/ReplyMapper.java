package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.ReplyVO;

public interface ReplyMapper {

	// 댓글 쓰기를 위한 DB작업 설계
	public int replyWrite(ReplyVO reply);
	
	// 댓글 리스트를 위한 DB작업 설계
	public ArrayList<ReplyVO> getList(int bno);
}
