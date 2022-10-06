package org.adamas.controller;

import javax.servlet.http.HttpSession;

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
	
	// 로그인 페이지
	@RequestMapping(value = "/member/login", method = RequestMethod.GET)
	public String login() {
		return "member/login";
	}
	
	// 로그인 연결
	@RequestMapping(value = "/member/login", method = RequestMethod.POST)
	public String login(HttpSession session, MemberVO member) {
		System.out.println("로그인 페이지 : "+member);
		
		session.setAttribute("login", ms.login(member));
		
		
		if(ms.login(member)==null) {
			return "member/login";
		} else {
			return "redirect:/";
		}
	}
	
	// 로그아웃
	@RequestMapping(value = "/member/logout", method = RequestMethod.POST)
	public String logout (HttpSession session) {
		session.invalidate();
		return "main/main";
	}
	
	// 회원가입 페이지
	@RequestMapping(value = "/member/signup", method = RequestMethod.GET)
	public void signup() {
		
	}
	
	// 회원가입 연결
	@RequestMapping(value = "/member/signup", method = RequestMethod.POST)
	public String signup(MemberVO member) {
		System.out.println("회원가입 페이지 : "+member);
		
		ms.signup(member);
		return "member/login";
	}
	
}
