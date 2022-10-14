package org.adamas.service;

import java.util.ArrayList;

import org.adamas.model.LottoVO;

public interface LottoService {

	// 과거 순위 리스트 설계
	public ArrayList<LottoVO> compare();
}
