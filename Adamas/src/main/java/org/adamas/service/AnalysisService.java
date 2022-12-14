package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;

public interface AnalysisService {

	// 전체 당첨결과 리스트 설계
	public ArrayList<LottoVO> getResult(int pageNum, int amount);
	
	// 해당 당첨결과 리스트 설계
	public ArrayList<LottoVO> thisResult(int lno);
	
	// 내 저장 번호 리스트 설계
	public ArrayList<MylottoVO> mylotto(String id, int pageNum, int amount);
	
	// // 내가 저장한 번호 삭제 설계
	public int mylottoRemove(int mlno);
	
	// 1년이내 당첨결과 리스트 설계
	public ArrayList<LottoVO> getYearResult(int pageNum, int amount);
	
	// 복권 총 회차 total 설계
	public int getTotal();
	
	// 내가 저장한 번호  total 설계
	public int getMylottoTotal(String id);
	
	// 1년 이내 당첨결과 total 설계
	public int getYearTotal();
}
