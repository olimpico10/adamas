package org.adamas.mapper;

import java.util.ArrayList;

import org.adamas.model.LottoVO;

public interface LottoMapper {

	// 과거 순위 리스트 DB설계
	public ArrayList<LottoVO> compare();
}
