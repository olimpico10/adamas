package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;
import org.adamas.service.AnalysisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class AnalysisController {
	@Autowired
	AnalysisService as;
	
	// 당첨결과 페이지
	@RequestMapping(value = "/gameResult", method= RequestMethod.GET)
	public String gameResult() {
		
		return "analysis/gameResult";
	}
	
	// 당첨 결과 가져오는 페이지
	@RequestMapping(value = "/analysis/getResult/{pageNum}/{amount}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<LottoVO>> getResult(@PathVariable int pageNum, @PathVariable int amount){
		
		return new ResponseEntity<>(as.getResult(pageNum, amount),HttpStatus.OK);
	}
	
	// 처음 화면에 노출되는 최신 당첨결과 불러오는 페이지
	@RequestMapping(value = "/analysis/latestResult/{pageNum}/{amount}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<LottoVO>> latestResult(@PathVariable int pageNum, @PathVariable int amount){
		
		return new ResponseEntity<>(as.getResult(pageNum, amount),HttpStatus.OK);
	}
	
	// 해당 당첨결과 가져오는 페이지
	@RequestMapping(value = "/analysis/thisResult/{lno}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<LottoVO>> thisResult(@PathVariable int lno){
		System.out.println(lno);
		
		return new ResponseEntity<>(as.thisResult(lno),HttpStatus.OK);
	}
	
	// 내 번호 당첨결과 페이지
	@RequestMapping(value = "/myGameResult", method= RequestMethod.GET)
	public String myGameResult() {
		
		return "analysis/myGameResult";
	}
	
	// 내 저장 번호 불러오는 페이지
	@RequestMapping(value = "/analysis/mylotto/{id}", method= RequestMethod.GET)
	public ResponseEntity<ArrayList<MylottoVO>> mylotto(@PathVariable String id ){
		System.out.println(id);
		
		return new ResponseEntity<>(as.mylotto(id), HttpStatus.OK);
	}
	
	// 최근 1년이내 당첨번호 불러오는 페이지
	@RequestMapping(value = "/analysis/getYearResult", method= RequestMethod.GET)
	public ResponseEntity<ArrayList<LottoVO>> getYearResult(){
		
		return new ResponseEntity<>(as.getYearResult(),HttpStatus.OK);
	}
	
	// getTotal
	@RequestMapping(value = "/analysis/getTotal", method= RequestMethod.GET)
	public ResponseEntity<Integer> getTotal(){
		
		return new ResponseEntity<>(as.getTotal(), HttpStatus.OK);
	}
}
