package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.ReplyMapper;
import org.adamas.model.ReplyVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReplyServiceimpl implements ReplyService{
	
	@Autowired
	ReplyMapper rm;
	
	// 댓글 쓰기를 위한 추상메서드 구현
	public int replyWrite(ReplyVO reply) {
		
		return rm.replyWrite(reply);
	}
	
	// 댓글 리스트를 위한 추상메서드 구현
	public ArrayList<ReplyVO> getList(int bno){
		
		return rm.getList(bno);
	}
}
