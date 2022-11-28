package org.adamas.model;

public class RecommentsVO {

	// rcno
	private int rcno;
	// 대댓글 내용 recomment
	private String recomment;
	// 대댓글 작성 시간 recommentDate
	private String recommentDate;
	// 대댓글 작성 ID
	private String id;
	// 대댓글 작성 nick
	private String nick;
	// 대댓글 달린 댓글 번호 rno
	private int rno;
	
	public int getRcno() {
		return rcno;
	}
	public void setRcno(int rcno) {
		this.rcno = rcno;
	}
	public String getRecomment() {
		return recomment;
	}
	public void setRecomment(String recomment) {
		this.recomment = recomment;
	}
	public String getRecommentDate() {
		return recommentDate;
	}
	public void setRecommentDate(String recommentDate) {
		this.recommentDate = recommentDate;
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
	public int getRno() {
		return rno;
	}
	public void setRno(int rno) {
		this.rno = rno;
	}
	
	@Override
	public String toString() {
		return "RecommentsVO [rcno=" + rcno + ", recomment=" + recomment + ", recommentDate=" + recommentDate + ", id="
				+ id + ", nick=" + nick + ", rno=" + rno + "]";
	}
}
