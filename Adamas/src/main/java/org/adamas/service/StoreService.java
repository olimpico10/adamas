package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.AddrVO;
import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;

public interface StoreService {

	// 판매점 리스트 설계
	public ArrayList<StoreVO> storeList(int pageNum, int amount, String storeName, String location);
	
	// 판매점리스트 Total 설계
	public int getTotal(String storeName, String location);
	
	// 시/도 리스트 설계
	public ArrayList<AddrVO> getSIDO();
	
	//  구/군 리스트 설계
	public ArrayList<AddrVO> getGUGUN(String sido);
	
	// 1등 당첨 판매점 리스트 설계
	public ArrayList<TopStoreVO> topStoreList(int lno);
	
	// 최신회차 조회 설계
	public int getMaxlno();
	
	// 전체회차 조회 설계
	public ArrayList<Integer> getlnoList();
}
