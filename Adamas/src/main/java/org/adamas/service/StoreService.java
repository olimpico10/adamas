package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;

public interface StoreService {

	// 판매점 리스트 설계
	public ArrayList<StoreVO> storeList();
	
	// 1등 당첨 판매점 리스트 설계
	public ArrayList<TopStoreVO> topStoreList(int lno);
	
	// 최신회차 조회 설계
	public int getMaxlno();
	
	// 전체회차 조회 설계
	public ArrayList<Integer> getlnoList();
}
