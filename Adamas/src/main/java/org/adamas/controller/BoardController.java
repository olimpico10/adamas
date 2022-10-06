package org.adamas.controller;

import org.adamas.model.BoardVO;
import org.adamas.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BoardController {
	@Autowired
	BoardService bs;
	
	// 글쓰기 페이지
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public String write() {
		return "board/write";
	}
	
	// 글쓰기 페이지(insert)
	@RequestMapping(value = "/board/write", method = RequestMethod.POST)
	public void write(BoardVO bvo) {
		System.out.println("글쓰기 페이지 : "+bvo);
		
		bs.write(bvo);
	}
}
