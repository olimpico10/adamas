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
	@RequestMapping(value = "/store/topList", method=RequestMethod.GET)
	public ResponseEntity<ArrayList<TopStoreVO>> topStoreList(){
		
		return new ResponseEntity<>(ss.topStoreList(), HttpStatus.OK);
	}
	
	// 판매점 위치 보기 페이지
	@RequestMapping(value = "/store/map", method= RequestMethod.GET)
	public String map(Model model, StoreVO store) {
		
		System.out.println(store);
		
		model.addAttribute("store", store);
		
		return "store/map";
	}
}
