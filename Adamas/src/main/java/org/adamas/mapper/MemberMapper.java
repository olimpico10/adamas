package org.adamas.mapper;

import org.adamas.model.MemberVO;

public interface MemberMapper {

	// 회원가입 DB설계
	public void signup(MemberVO member);
	
	// 로그인 DB설계
	public MemberVO login(MemberVO member);
}
