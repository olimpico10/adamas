package org.adamas.service;

import org.adamas.mapper.MemberMapper;
import org.adamas.model.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServiceimpl implements MemberService{
	@Autowired
	MemberMapper mm;
	
	// 회원가입 구현
	public void signup(MemberVO member) {
		mm.signup(member);
	}
}
