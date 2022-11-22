package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.BoardMapper;
import org.adamas.model.BoardVO;
import org.adamas.model.CriteriaVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BoardServiceimpl implements BoardService {
	@Autowired
	BoardMapper bm;
	
	// 설계되어진 write 추상메서드 구현
	public void write(BoardVO board) {
		System.out.println("서비스 영역 : "+board);
		
		bm.write(board);
	}
	
	// 설계되어진 list 추상메서드 구현
	public ArrayList<BoardVO> list(CriteriaVO cri){
		
		return bm.list(cri);
	}
	
	// 글 전체건수 추상메서드 구현
	public int total() {
		
		return bm.total();
	}
	
	@Transactional
	// 글 상세 페이지 추상메서드 구현
	public BoardVO detail(BoardVO board) {
		bm.cntup(board);
		
		return bm.detail(board);
	}

	// 글 수정 페이지 추상메서드 구현
	public void modify(BoardVO board) {
		System.out.println("서비스 영역 : "+board);
		
		bm.modify(board);
	}
	
	// 글 삭제 페이지 추상메서드 구현
	public void remove(int bno) {
		bm.remove(bno);
	}
}
