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
	// 2등공
	int secondplace;
	
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
	public int getSecondplace() {
		return secondplace;
	}
	public void setSecondplace(int secondplace) {
		this.secondplace = secondplace;
	}
	
	@Override
	public String toString() {
		return "LottoVO [lno=" + lno + ", ball1=" + ball1 + ", ball2=" + ball2 + ", ball3=" + ball3 + ", ball4=" + ball4
				+ ", ball5=" + ball5 + ", ball6=" + ball6 + ", secondplace=" + secondplace + "]";
	}
	
	
}
