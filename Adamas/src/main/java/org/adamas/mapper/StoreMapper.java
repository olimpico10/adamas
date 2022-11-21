package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.AddrVO;
import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;
import org.apache.ibatis.annotations.Param;

public interface StoreMapper {

	// 판매점 리스트 DB설계
	public ArrayList<StoreVO> storeList(@Param("pageNum")int pageNum, @Param("amount")int amount, @Param("storeName")String storeName, @Param("location")String location);
	
	// 판매점리스트 Total DB설계
	public int getTotal(@Param("storeName")String storeName, @Param("location")String location);
	
	// 시/도 리스트 DB설계
	public ArrayList<AddrVO> getSIDO();
	
	//  구/군 리스트 DB설계
	public ArrayList<AddrVO> getGUGUN(String sido);
	
	// 1등 당첨 판매점 리스트 DB설계
	public ArrayList<TopStoreVO> topStoreList(int lno);
	
	// 최신회차 조회 DB설계
	public int getMaxlno();
	
	// 전체회차 조회 DB설계
	public ArrayList<Integer> getlnoList();
}
