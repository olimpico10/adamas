package org.adamas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class StoreController {

	// 판매점 조회 페이지
	@RequestMapping(value = "/store/sellerInfo", method= RequestMethod.GET)
	public String sellerInfo() {
		
		return "store/sellerInfo";
	}
	
	// 당첨 판매점 조회 페이지
	@RequestMapping(value = "/store/topStore", method= RequestMethod.GET)
	public String topStore() {
		
		return "store/topStore";
	}
	
	// 판매점 위치 보기 페이지
	@RequestMapping(value = "/store/map", method= RequestMethod.GET)
	public String map() {
		
		return "store/map";
	}
}
