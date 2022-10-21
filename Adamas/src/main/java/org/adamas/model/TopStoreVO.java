package org.adamas.model;

public class TopStoreVO {

	// tsno
	private int tsno;
	// 가게위치
	private String location;
	// 가게이름
	private String sname;
	// 비고(자동, 수동, 반자동)
	private String tsremarks;
	// lno(로또회차)
	private int lno;
	
	public int getTsno() {
		return tsno;
	}
	public void setTsno(int tsno) {
		this.tsno = tsno;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getSname() {
		return sname;
	}
	public void setSname(String sname) {
		this.sname = sname;
	}
	public String getTsremarks() {
		return tsremarks;
	}
	public void setTsremarks(String tsremarks) {
		this.tsremarks = tsremarks;
	}
	public int getLno() {
		return lno;
	}
	public void setLno(int lno) {
		this.lno = lno;
	}
	
	@Override
	public String toString() {
		return "TopStoreVO [tsno=" + tsno + ", location=" + location + ", sname=" + sname + ", tsremarks=" + tsremarks
				+ ", lno=" + lno + "]";
	}
	
}
