package org.adamas.model;

public class MemberVO {
	// 아이디
	private String id;
	// 비밀번호
	private String password;
	// 이름
	private String name;
	// 닉네임
	private String nick;
	// 생년월일
	private String birth;
	// 이메일
	private String email;
	// 휴대전화
	private String phone;
	// 가입일
	private String memdate;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getBirth() {
		return birth;
	}
	public void setBirth(String birth) {
		this.birth = birth;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getMemdate() {
		return memdate;
	}
	public void setMemdate(String memdate) {
		this.memdate = memdate;
	}
	
	@Override
	public String toString() {
		return "MemberVO [id=" + id + ", password=" + password + ", name=" + name + ", nick=" + nick + ", birth="
				+ birth + ", email=" + email + ", phone=" + phone + ", memdate=" + memdate + "]";
	}
	
}
