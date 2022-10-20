package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;

public interface LottoService {

	// 과거 순위 리스트 설계
	public ArrayList<LottoVO> compare();
	
	// 생성 된 랜덤번호 저장 설계
	public int Storage(MylottoVO myLotto);
}
