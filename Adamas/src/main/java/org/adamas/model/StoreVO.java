package org.adamas.model;

public class StoreVO {

	// storeno
	private int storeno;
	// 가게위치
	private String location;
	// 가게이름
	private String sname;
	// 가게 전화번호
	private String phone;
	
	
	public int getStoreno() {
		return storeno;
	}
	public void setStoreno(int storeno) {
		this.storeno = storeno;
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
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	
	@Override
	public String toString() {
		return "StoreVO [storeno=" + storeno + ", location=" + location + ", sname=" + sname + ", phone=" + phone + "]";
	}
	
}
