package org.adamas.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LottoController {
	
	// 번호발생기 페이지
	@RequestMapping(value = "/lotto/generator", method = RequestMethod.GET)
	public String generator() {
		return "lotto/generator";
	}

}
