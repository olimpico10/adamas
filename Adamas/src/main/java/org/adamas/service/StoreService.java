package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;

public interface StoreService {

	// 판매점 리스트 설계
	public ArrayList<StoreVO> storeList();
	
	// 1등 당첨 판매점 리스트
	public ArrayList<TopStoreVO> topStoreList();
}
