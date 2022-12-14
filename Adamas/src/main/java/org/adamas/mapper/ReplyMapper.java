package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.RecommentsVO;
import org.adamas.model.ReplyVO;

public interface ReplyMapper {

	// 댓글 쓰기를 위한 DB작업 설계
	public int replyWrite(ReplyVO reply);
	
	// 댓글 리스트를 위한 DB작업 설계
	public ArrayList<ReplyVO> getList(int bno);
	
	// 댓글 수정을 위한 DB작업 설계
	public int replyModify(ReplyVO reply);
	
	// 댓글 삭제를 위한 설계
	public int replyRemove(int rno);
	
	// 대댓글 쓰기를 위한 DB작업 설계
	public int recommentWrite(RecommentsVO rcmt);
	
	// 대댓글 리스트를 위한 DB작업 설계
	public ArrayList<RecommentsVO> getRecommentList(int rno);
	
	// 대댓글 수정을 위한 DB작업 설계
	public int recommentModify(RecommentsVO rcmt);
	
	// 대댓글 삭제를 위한 DB작업 설계
	public int recommentRemove(int rcno);
}
