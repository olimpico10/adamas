package org.adamas.service;

import java.util.ArrayList;

import org.adamas.mapper.StoreMapper;
import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StoreServieimpl implements StoreService {
	@Autowired
	StoreMapper sm;
	
	// 판매점 리스트 추상메서드 구현
	public ArrayList<StoreVO> storeList(int pageNum, int amount){
		
		return sm.storeList(pageNum, amount);
	}

	// 판매점리스트 Total 추상메서드 구현
	public int getTotal() {
		
		return sm.getTotal();
	}
	
	// 1등 당첨 판매점 리스트 추상메서드 구현
	public ArrayList<TopStoreVO> topStoreList(int lno){
		
		return sm.topStoreList(lno);
	}
	
	// 최신회차 조회 추상메서드 구현
	public int getMaxlno() {
		
		return sm.getMaxlno();
	}
	
	// 전체회차 조회 추상메서드 구현
	public ArrayList<Integer> getlnoList(){
		
		return sm.getlnoList();
	}
}
