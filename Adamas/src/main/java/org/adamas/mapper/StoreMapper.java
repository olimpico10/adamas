package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;

public interface StoreMapper {

	// 판매점 리스트 DB설계
	public ArrayList<StoreVO> storeList(int pageNum, int amount);
	
	// 판매점리스트 Total DB설계
	public int getTotal();
	
	// 1등 당첨 판매점 리스트 DB설계
	public ArrayList<TopStoreVO> topStoreList(int lno);
	
	// 최신회차 조회 DB설계
	public int getMaxlno();
	
	// 전체회차 조회 DB설계
	public ArrayList<Integer> getlnoList();
}
