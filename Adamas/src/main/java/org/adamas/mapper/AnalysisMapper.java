package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.LottoVO;

public interface AnalysisMapper {

	// 전체 당첨 결과 리스트 DB설계
	public ArrayList<LottoVO> getResult();
}
