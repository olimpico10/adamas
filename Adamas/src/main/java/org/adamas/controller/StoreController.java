package org.adamas.controller;

import java.util.ArrayList;

import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;
import org.adamas.service.StoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StoreController {
	@Autowired
	StoreService ss;

	// 판매점 조회 페이지
	@RequestMapping(value = "/store/sellerInfo", method= RequestMethod.GET)
	public String sellerInfo() {
					
		return "store/sellerInfo";
	}
	
	// 판매점 리스트
	@RequestMapping(value = "/store/list", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<StoreVO>> storeList(){
		
		return new ResponseEntity<>(ss.storeList(), HttpStatus.OK);
	}
	
	// 당첨 판매점 조회 페이지
	@RequestMapping(value = "/store/topStore", method= RequestMethod.GET)
	public String topStore() {
		
		return "store/topStore";
	}
	
	// 1등 당첨 판매점 리스트
	@RequestMapping(value = "/store/topList/{lno}", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<TopStoreVO>> topStoreList(@PathVariable int lno){
		System.out.println(lno);
		
		return new ResponseEntity<>(ss.topStoreList(lno), HttpStatus.OK);
	}
	
	// 최신회차를 알기 위한 페이지
	@RequestMapping(value = "/store/getMaxlno", method=RequestMethod.GET)
	public ResponseEntity<Integer> getMaxlno(){
		
		return new ResponseEntity<>(ss.getMaxlno(), HttpStatus.OK);
	}
	
	// 전체회차를 표시하기 위한 페이지
	@RequestMapping(value = "/store/getlnoList", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<Integer>> getlnoList(){
		
		return new ResponseEntity<>(ss.getlnoList(), HttpStatus.OK);
	}
	
	// 판매점 위치 보기 페이지
	@RequestMapping(value = "/store/map", method= RequestMethod.GET)
	public String map(Model model, StoreVO store) {
		
		System.out.println(store);
		
		model.addAttribute("store", store);
		
		return "store/map";
	}
}
