package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.LottoVO;

public interface AnalysisService {

	// 전체 당첨결과 리스트 설계
	public ArrayList<LottoVO> getResult();
	
	// 해당 당첨결과 리스트 설계
	public ArrayList<LottoVO> thisResult(int lno);
}
