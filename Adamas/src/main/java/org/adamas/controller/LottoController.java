package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;
import org.adamas.service.LottoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	// 랜덤 발생기(insert)
	@RequestMapping(value = "/lotto/Storage", method=RequestMethod.POST)
	public ResponseEntity<String> Storage(@RequestBody MylottoVO myLotto){
		// insert가 성공했으면 result변수에 1저장
		// insert가 실패했으면 result변수에 0저장
		int result = ls.Storage(myLotto);
		
		// result가 1이면 HttpStatus.OK
		// result가 0이면 HttpStatus.INTERNAL_SERVER_ERROR
		return result==1? new ResponseEntity<>("success",HttpStatus.OK)
						: new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
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
