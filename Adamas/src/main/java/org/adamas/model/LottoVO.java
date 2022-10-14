package org.adamas.model;

public class LottoVO {

	// 회차
	int lno;
	// 첫번째공
	int ball1;
	// 두번째공
	int ball2;
	// 세번째공
	int ball3;
	// 네번째공
	int ball4;
	// 다섯번째공
	int ball5;
	// 여섯번째공
	int ball6;
	// 보너스공
	int bonus;
	// 1등 상금
	long firstPrize;
	// 1등 당첨인원
	int firstWinner;
	// 2등 상금
	long secondPrize;
	// 2등 당첨인원
	int secondWinner;
	// 3등 상금
	long thirdPrize;
	// 3등 당첨인원
	int thirdWinner;
	// 4등 상금
	long fourthPrize;
	// 4등 당첨인원	
	int fourthWinner;
	// 5등 상금
	long fifthPrize;
	// 5등 당첨인원	
	int fifthWinner;
	
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
	
	@Override
	public String toString() {
		return "LottoVO [lno=" + lno + ", ball1=" + ball1 + ", ball2=" + ball2 + ", ball3=" + ball3 + ", ball4=" + ball4
				+ ", ball5=" + ball5 + ", ball6=" + ball6 + ", bonus=" + bonus + ", firstPrize=" + firstPrize
				+ ", firstWinner=" + firstWinner + ", secondPrize=" + secondPrize + ", secondWinner=" + secondWinner
				+ ", thirdPrize=" + thirdPrize + ", thirdWinner=" + thirdWinner + ", fourthPrize=" + fourthPrize
				+ ", fourthWinner=" + fourthWinner + ", fifthPrize=" + fifthPrize + ", fifthWinner=" + fifthWinner
				+ "]";
	}
	
}
