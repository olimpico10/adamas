package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.BoardVO;
import org.adamas.model.CriteriaVO;

public interface BoardMapper {

	// 글쓰기 DB설계
	public void write(BoardVO board);
	
	// 글 목록 DB설계
	public ArrayList<BoardVO> list(CriteriaVO cri);
	
	// 글 전체건수 DB설계
	public int total();
	
	// 글 상세 페이지 DB설계
	public BoardVO detail(BoardVO board);
	
	// 목록리스트에서 제목을 클릭 한 후 상세내용을 조회 할 때 조회수도 같이 update하는 DB작업 설계
	public void cntup(BoardVO board);
	
	// 글 수정 페이지 DB설계
	public void modify(BoardVO board);
	
	// 글 삭제 DB설계
	public void remove(int bno);
}
