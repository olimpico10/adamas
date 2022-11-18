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
	public ArrayList<StoreVO> storeList(int pageNum, int amount, String storeName, String location){
		System.out.println("pageNum="+pageNum);
		System.out.println("amount="+amount);
		System.out.println("storeName="+storeName);
		System.out.println("location="+location);
		return sm.storeList(pageNum, amount, storeName, location);
	}

	// 판매점리스트 Total 추상메서드 구현
	public int getTotal(String storeName, String location) {
		
		return sm.getTotal(storeName, location);
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
