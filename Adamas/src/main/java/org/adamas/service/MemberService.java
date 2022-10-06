package org.adamas.service;

import org.adamas.model.MemberVO;

public interface MemberService {

	// 회원가입 설계
	public void signup(MemberVO member);
	
	// 로그인 설계
	public MemberVO login(MemberVO member);
}
