package org.adamas.model;

public class BoardVO {
	
	// 글 번호
	private int bno;
	// 글 쓴 사람의 아이디
	private String id;
	// 글 쓴 사람의 닉네임
	private String nick;
	// 카테고리
	private String category;
	// 글 제목
	private String title;
	// 글 내용
	private String content;
	// 글 쓴 시점
	private String regdate;
	// 조회수
	private int cnt;
	// 이전게시글 번호
	private String last_bno;
	// 다음게시글 번호
	private String next_bno;
	// 추천수
	private int hnocnt;
	
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getNick() {
		return nick;
	}
	public void setNick(String nick) {
		this.nick = nick;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getRegdate() {
		return regdate;
	}
	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}
	public int getCnt() {
		return cnt;
	}
	public void setCnt(int cnt) {
		this.cnt = cnt;
	}
	public String getLast_bno() {
		return last_bno;
	}
	public void setLast_bno(String last_bno) {
		this.last_bno = last_bno;
	}
	public String getNext_bno() {
		return next_bno;
	}
	public void setNext_bno(String next_bno) {
		this.next_bno = next_bno;
	}
	public int getHnocnt() {
		return hnocnt;
	}
	public void setHnocnt(int hnocnt) {
		this.hnocnt = hnocnt;
	}
	
	@Override
	public String toString() {
		return "BoardVO [bno=" + bno + ", id=" + id + ", nick=" + nick + ", category=" + category + ", title=" + title
				+ ", content=" + content + ", regdate=" + regdate + ", cnt=" + cnt + ", last_bno=" + last_bno
				+ ", next_bno=" + next_bno + ", hnocnt=" + hnocnt + "]";
	}
	
}
