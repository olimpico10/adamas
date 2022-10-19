package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.AnalysisMapper;
import org.adamas.model.LottoVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AnalysisServiceimpl implements AnalysisService{
	@Autowired
	AnalysisMapper am;
	
	// 전체 당첨결과 리스트 추상메서드 구현
	public ArrayList<LottoVO> getResult(){
		
		return am.getResult();
	}
	
	// 해당 당첨결과 리스트 추상메서드 구현
	public ArrayList<LottoVO> thisResult(int lno){
		
		return am.thisResult(lno);
	}
}
