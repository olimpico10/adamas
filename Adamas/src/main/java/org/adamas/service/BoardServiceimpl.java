package org.adamas.service;

import org.adamas.mapper.BoardMapper;
import org.adamas.model.BoardVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceimpl implements BoardService {
	@Autowired
	BoardMapper bm;
	
	// 설계되어진 write 추상메서드 구현
	public void write(BoardVO bvo) {
		System.out.println("서비스 영역 : "+bvo);
		
		bm.write(bvo);
	}
	
}
