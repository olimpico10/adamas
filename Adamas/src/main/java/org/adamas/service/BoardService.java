package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.BoardVO;

public interface BoardService {

	// 글쓰기 설계
	public void write(BoardVO board);
	
	// 글 목록 리스트 설계
	public ArrayList<BoardVO> list();
	
	// 글 상세 페이지 설계
	public BoardVO detail(BoardVO board);
	
	// 글 수정 페이지 설계
	public void modify(BoardVO board);
	
	// 글 삭제 페이지 설계
	public void remove(int bno);
}
