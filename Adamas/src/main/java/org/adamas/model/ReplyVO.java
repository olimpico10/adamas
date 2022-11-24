package org.adamas.model;

public class ReplyVO {
	// rno
	private int rno;
	// 댓글 내용 comment
	private String comment;
	// 댓글 작성 시간 replydate
	private String replydate;
	// 댓글 작성 ID id
	private String id;
	// 댓글 작성 닉네임 nick
	private String nick;
	// 댓글 달린 글 번호 bno
	private int bno;
	
	public int getRno() {
		return rno;
	}
	public void setRno(int rno) {
		this.rno = rno;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public String getReplydate() {
		return replydate;
	}
	public void setReplydate(String replydate) {
		this.replydate = replydate;
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
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	
	@Override
	public String toString() {
		return "ReplyVO [rno=" + rno + ", comment=" + comment + ", replydate=" + replydate + ", id=" + id + ", nick="
				+ nick + ", bno=" + bno + "]";
	}

}
