package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.ReplyMapper;
import org.adamas.model.RecommentsVO;
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
	
	// 댓글 수정을 위한 추상메서드 구현
	public int replyModify(ReplyVO reply) {
		
		return rm.replyModify(reply);
	}
	
	// 댓글 삭제를 위한 추상메서드 구현
	public int replyRemove(int rno) {
		
		return rm.replyRemove(rno);
	}
	
	// 대댓글 쓰기를 위한 추상메서드 구현
	public int recommentWrite(RecommentsVO rcmt) {
		
		return rm.recommentWrite(rcmt);
	}
	
	// 대댓글 리스트를 위한 추상메서드 구현
	public ArrayList<RecommentsVO> getRecommentList(int rno){
		
		return rm.getRecommentList(rno);
	}
	
	// 대댓글 수정을 위한 추상메서드 구현
	public int recommentModify(RecommentsVO rcmt) {
		
		return rm.recommentModify(rcmt);
	}
	
	// 대댓글 삭제를 위한 추상메서드 구현
	public int recommentRemove(int rcno) {
		
		return rm.recommentRemove(rcno);
	}
}
