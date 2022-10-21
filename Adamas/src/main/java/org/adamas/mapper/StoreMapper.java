package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.StoreVO;
import org.adamas.model.TopStoreVO;

public interface StoreMapper {

	// 판매점 리스트 DB설계
	public ArrayList<StoreVO> storeList();
	
	// 1등 당첨 판매점 리스트 DB설계
	public ArrayList<TopStoreVO> topStoreList();
}
