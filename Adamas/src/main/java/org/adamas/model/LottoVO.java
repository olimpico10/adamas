package org.adamas.model;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class LottoVO {

	// 회차
	private int lno;
	// 첫번째공
	private int ball1;
	// 두번째공
	private int ball2;
	// 세번째공
	private int ball3;
	// 네번째공
	private int ball4;
	// 다섯번째공
	private int ball5;
	// 여섯번째공
	private int ball6;
	// 보너스공
	private int bonus;
	// 1등 상금
	private long firstPrize;
	// 1등 당첨인원
	private int firstWinner;
	// 2등 상금
	private long secondPrize;
	// 2등 당첨인원
	private int secondWinner;
	// 3등 상금
	private long thirdPrize;
	// 3등 당첨인원
	private int thirdWinner;
	// 4등 상금
	private long fourthPrize;
	// 4등 당첨인원	
	private int fourthWinner;
	// 5등 상금
	private long fifthPrize;
	// 5등 당첨인원	
	private int fifthWinner;
	// 비고
	private String remarks;
	// 로또 추첨일
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private Date lottoDay;
	
	// 생성기로 생성 된 첫번째공
	private int geBall1;
	// 생성기로 생성 된 두번째공
	private int geBall2;
	// 생성기로 생성 된 세번째공
	private int geBall3;
	// 생성기로 생성 된 네번째공
	private int geBall4;
	// 생성기로 생성 된 다섯번째공
	private int geBall5;
	// 생성기로 생성 된 여섯번째공
	private int geBall6;
	
	public int getLno() {
		return lno;
	}
	public void setLno(int lno) {
		this.lno = lno;
	}
	public int getBall1() {
		return ball1;
	}
	public void setBall1(int ball1) {
		this.ball1 = ball1;
	}
	public int getBall2() {
		return ball2;
	}
	public void setBall2(int ball2) {
		this.ball2 = ball2;
	}
	public int getBall3() {
		return ball3;
	}
	public void setBall3(int ball3) {
		this.ball3 = ball3;
	}
	public int getBall4() {
		return ball4;
	}
	public void setBall4(int ball4) {
		this.ball4 = ball4;
	}
	public int getBall5() {
		return ball5;
	}
	public void setBall5(int ball5) {
		this.ball5 = ball5;
	}
	public int getBall6() {
		return ball6;
	}
	public void setBall6(int ball6) {
		this.ball6 = ball6;
	}
	public int getBonus() {
		return bonus;
	}
	public void setBonus(int bonus) {
		this.bonus = bonus;
	}
	public long getFirstPrize() {
		return firstPrize;
	}
	public void setFirstPrize(long firstPrize) {
		this.firstPrize = firstPrize;
	}
	public int getFirstWinner() {
		return firstWinner;
	}
	public void setFirstWinner(int firstWinner) {
		this.firstWinner = firstWinner;
	}
	public long getSecondPrize() {
		return secondPrize;
	}
	public void setSecondPrize(long secondPrize) {
		this.secondPrize = secondPrize;
	}
	public int getSecondWinner() {
		return secondWinner;
	}
	public void setSecondWinner(int secondWinner) {
		this.secondWinner = secondWinner;
	}
	public long getThirdPrize() {
		return thirdPrize;
	}
	public void setThirdPrize(long thirdPrize) {
		this.thirdPrize = thirdPrize;
	}
	public int getThirdWinner() {
		return thirdWinner;
	}
	public void setThirdWinner(int thirdWinner) {
		this.thirdWinner = thirdWinner;
	}
	public long getFourthPrize() {
		return fourthPrize;
	}
	public void setFourthPrize(long fourthPrize) {
		this.fourthPrize = fourthPrize;
	}
	public int getFourthWinner() {
		return fourthWinner;
	}
	public void setFourthWinner(int fourthWinner) {
		this.fourthWinner = fourthWinner;
	}
	public long getFifthPrize() {
		return fifthPrize;
	}
	public void setFifthPrize(long fifthPrize) {
		this.fifthPrize = fifthPrize;
	}
	public int getFifthWinner() {
		return fifthWinner;
	}
	public void setFifthWinner(int fifthWinner) {
		this.fifthWinner = fifthWinner;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public Date getLottoDay() {
		return lottoDay;
	}
	public void setLottoDay(Date lottoDay) {
		this.lottoDay = lottoDay;
	}
	public int getGeBall1() {
		return geBall1;
	}
	public void setGeBall1(int geBall1) {
		this.geBall1 = geBall1;
	}
	public int getGeBall2() {
		return geBall2;
	}
	public void setGeBall2(int geBall2) {
		this.geBall2 = geBall2;
	}
	public int getGeBall3() {
		return geBall3;
	}
	public void setGeBall3(int geBall3) {
		this.geBall3 = geBall3;
	}
	public int getGeBall4() {
		return geBall4;
	}
	public void setGeBall4(int geBall4) {
		this.geBall4 = geBall4;
	}
	public int getGeBall5() {
		return geBall5;
	}
	public void setGeBall5(int geBall5) {
		this.geBall5 = geBall5;
	}
	public int getGeBall6() {
		return geBall6;
	}
	public void setGeBall6(int geBall6) {
		this.geBall6 = geBall6;
	}
	
	@Override
	public String toString() {
		return "LottoVO [lno=" + lno + ", ball1=" + ball1 + ", ball2=" + ball2 + ", ball3=" + ball3 + ", ball4=" + ball4
				+ ", ball5=" + ball5 + ", ball6=" + ball6 + ", bonus=" + bonus + ", firstPrize=" + firstPrize
				+ ", firstWinner=" + firstWinner + ", secondPrize=" + secondPrize + ", secondWinner=" + secondWinner
				+ ", thirdPrize=" + thirdPrize + ", thirdWinner=" + thirdWinner + ", fourthPrize=" + fourthPrize
				+ ", fourthWinner=" + fourthWinner + ", fifthPrize=" + fifthPrize + ", fifthWinner=" + fifthWinner
				+ ", remarks=" + remarks + ", lottoDay=" + lottoDay + ", geBall1=" + geBall1 + ", geBall2=" + geBall2
				+ ", geBall3=" + geBall3 + ", geBall4=" + geBall4 + ", geBall5=" + geBall5 + ", geBall6=" + geBall6
				+ "]";
	}
		
}
