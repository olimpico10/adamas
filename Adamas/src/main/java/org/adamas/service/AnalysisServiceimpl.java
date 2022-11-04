package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.AnalysisMapper;
import org.adamas.model.LottoVO;
import org.adamas.model.MylottoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalysisServiceimpl implements AnalysisService{
	@Autowired
	AnalysisMapper am;
	
	// 전체 당첨결과 리스트 추상메서드 구현
	public ArrayList<LottoVO> getResult(int pageNum, int amount){
		
		return am.getResult(pageNum, amount);
	}
	
	// 해당 당첨결과 리스트 추상메서드 구현
	public ArrayList<LottoVO> thisResult(int lno){
		
		return am.thisResult(lno);
	}
	
	// 내 저장 번호 리스트 추상메서드 구현
	public ArrayList<MylottoVO> mylotto(String id){
		
		return am.mylotto(id);
	}
	
	// 1년이내 당첨결과 리스트 추상메서드 구현
	public ArrayList<LottoVO> getYearResult(){
		
		return am.getYearResult();
	}
	
	// 복권 총 회차 total 추상메서드 구현
	public int getTotal() {
		
		return am.getTotal();
	}
}
