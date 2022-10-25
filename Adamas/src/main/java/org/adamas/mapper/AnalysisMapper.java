package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;

public interface AnalysisMapper {

	// 전체 당첨 결과 리스트 DB설계
	public ArrayList<LottoVO> getResult();
	
	// 해당 당첨결과 리스트 DB설계
	public ArrayList<LottoVO> thisResult(int lno);
	
	// 내 저장 번호 리스트 DB설계
	public ArrayList<MylottoVO> mylotto(String id);
	
	// 1년이내 당첨 결과 리스트 DB설계
	public ArrayList<LottoVO> getYearResult();
}
