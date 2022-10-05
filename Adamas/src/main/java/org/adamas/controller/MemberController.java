package org.adamas.controller;

import org.adamas.model.MemberVO;
import org.adamas.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MemberController {
	@Autowired
	MemberService ms;
	
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public String login() {
		return "member/login";
	}
	
	@RequestMapping(value = "/member/signup", method = RequestMethod.GET)
	public void signup() {
		
	}
	
	@RequestMapping(value = "/member/signup", method = RequestMethod.POST)
	public String signup(MemberVO member) {
		System.out.println("회원가입 페이지 : "+member);
		
		ms.signup(member);
		return "/member/login";
	}
}
