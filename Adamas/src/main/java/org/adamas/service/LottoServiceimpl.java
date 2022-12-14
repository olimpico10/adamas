package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.LottoMapper;
import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LottoServiceimpl implements LottoService{
	@Autowired
	LottoMapper lm;

	// 과거 순위 리스트 추상메서드 구현
	public ArrayList<LottoVO> compare(){
		
		return lm.compare();
	}
	
	// 생성 된 랜덤번호 저장 추상메서드 구현
	public int Storage(MylottoVO myLotto) {
		
		return lm.Storage(myLotto);
	}
}
