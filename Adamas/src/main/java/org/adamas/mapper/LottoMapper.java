package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;

public interface LottoMapper {

	// 과거 순위 리스트 DB설계
	public ArrayList<LottoVO> compare();
	
	// 생성 된 랜덤번호 저장 DB설계
	public int Storage(MylottoVO myLotto);
}
