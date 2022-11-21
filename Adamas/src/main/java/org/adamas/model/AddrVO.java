package org.adamas.model;

public class AddrVO {
	
	// addrno
	private int addrno;
	
	// city
	private String city;
	
	// region
	private String region;

	public int getAddrno() {
		return addrno;
	}

	public void setAddrno(int addrno) {
		this.addrno = addrno;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getRegion() {
		return region;
	}

	public void setRegion(String region) {
		this.region = region;
	}

	@Override
	public String toString() {
		return "AddrVO [addrno=" + addrno + ", city=" + city + ", region=" + region + "]";
	}
	
}
