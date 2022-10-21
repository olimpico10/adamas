package org.adamas.model;

public class MylottoVO {

	// mlno
	private int mlno;
	// 첫번째공
	private int myball1;
	// 두번째공
	private int myball2;
	// 세번째공
	private int myball3;
	// 네번째공
	private int myball4;
	// 다섯번째공
	private int myball5;
	// 여섯번째공
	private int myball6;
	// id
	private String id;
	
	public int getMlno() {
		return mlno;
	}
	public void setMlno(int mlno) {
		this.mlno = mlno;
	}
	public int getMyball1() {
		return myball1;
	}
	public void setMyball1(int myball1) {
		this.myball1 = myball1;
	}
	public int getMyball2() {
		return myball2;
	}
	public void setMyball2(int myball2) {
		this.myball2 = myball2;
	}
	public int getMyball3() {
		return myball3;
	}
	public void setMyball3(int myball3) {
		this.myball3 = myball3;
	}
	public int getMyball4() {
		return myball4;
	}
	public void setMyball4(int myball4) {
		this.myball4 = myball4;
	}
	public int getMyball5() {
		return myball5;
	}
	public void setMyball5(int myball5) {
		this.myball5 = myball5;
	}
	public int getMyball6() {
		return myball6;
	}
	public void setMyball6(int myball6) {
		this.myball6 = myball6;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "MylottoVO [mlno=" + mlno + ", myball1=" + myball1 + ", myball2=" + myball2 + ", myball3=" + myball3
				+ ", myball4=" + myball4 + ", myball5=" + myball5 + ", myball6=" + myball6 + ", id=" + id + "]";
	}
	
}
