package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;

public interface AnalysisMapper {

	// 전체 당첨 결과 리스트 DB설계
	public ArrayList<LottoVO> getResult(int pageNum, int amount);
	
	// 해당 당첨결과 리스트 DB설계
	public ArrayList<LottoVO> thisResult(int lno);
	
	// 내 저장 번호 리스트 DB설계
	public ArrayList<MylottoVO> mylotto(String id, int pageNum, int amount);
	
	// // 내가 저장한 번호 삭제 DB설계
	public int mylottoRemove(int mlno);
	
	// 1년이내 당첨 결과 리스트 DB설계
	public ArrayList<LottoVO> getYearResult();
	
	// 복권 총 회차 total DB설계
	public int getTotal();
	
	// 내가 저장한 번호  total DB설계
	public int getMylottoTotal(String id);
}
