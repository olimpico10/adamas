package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.ReplyVO;

public interface ReplyService {

	// 댓글 쓰기를 위한 설계
	public int replyWrite(ReplyVO reply);
	
	// 댓글 리스트를 위한 설계
	public ArrayList<ReplyVO> getList(int bno);
}
