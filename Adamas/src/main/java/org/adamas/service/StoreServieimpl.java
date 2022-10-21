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
	public ArrayList<StoreVO> storeList(){
		
		return sm.storeList();
	}
	
	// 1등 당첨 판매점 리스트 추상메서드 구현
	public ArrayList<TopStoreVO> topStoreList(){
		
		return sm.topStoreList();
	}
}
