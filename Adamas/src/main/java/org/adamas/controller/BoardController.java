package org.adamas.controller;

import org.adamas.model.BoardVO;
import org.adamas.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
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
	public String write(BoardVO board) {
		System.out.println("글쓰기 페이지 : "+board);
		
		bs.write(board);
		
		return "redirect:/board/list";
	}
	
	// 글목록 페이지
	@RequestMapping(value = "/board/list", method = RequestMethod.GET)
	public String list(Model model) {
		model.addAttribute("list", bs.list());
		
		return "board/list";
	}
	
	// 글 상세 페이지
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	public String detail(Model model, BoardVO board) {
		model.addAttribute("detail", bs.detail(board));
		System.out.println(bs.detail(board));
		
		return "board/detail";
	}
	
	// 글 수정 페이지
	@RequestMapping(value = "/board/modify", method = RequestMethod.GET)
	public String modify(Model model, BoardVO board) {
		model.addAttribute("modify", bs.detail(board));
		System.out.println(bs.detail(board));
		
		return "board/modify";
	}
	
	// 글 수정 페이지(update)
	@RequestMapping(value = "/board/modify", method = RequestMethod.POST)
	public String modify(BoardVO board) {
		System.out.println("글수정 페이지 : "+board);
		
		int bno = board.getBno();
		bs.modify(board);
		
		return "redirect:/board/detail?bno="+bno;
	}
	
	// 글 삭제 페이지
	@RequestMapping(value = "/board/remove", method = RequestMethod.POST)
	public String remove(int bno) {
		bs.remove(bno);
		
		return "redirect:/board/list";
	}

}
