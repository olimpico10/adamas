package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.service.LottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LottoController {
	@Autowired
	LottoService ls;
	
	// 번호발생기 페이지
	@RequestMapping(value = "/lotto/generator", method = RequestMethod.GET)
	public String generator() {
		return "lotto/generator";
	}
	
	// 랜덤 발생기 페이지
	@RequestMapping(value = "/lotto/randomGenerator", method = RequestMethod.GET)
	public String random() {
		return "lotto/randomGenerator";
	}

	// 과거 순위 비교하기(화면)
	@RequestMapping(value = "/lotto/compare", method=RequestMethod.GET)
	public String historyCompare(Model model, LottoVO lotto) {
		model.addAttribute("lotto", lotto);
		
		return "lotto/compare";
	}
	
	// 과거 순위 비교하기 페이지
	@RequestMapping(value = "/lotto/historyCompare", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<LottoVO>> compare() {
		
		return new ResponseEntity<>(ls.compare(),HttpStatus.OK);
	}
}
