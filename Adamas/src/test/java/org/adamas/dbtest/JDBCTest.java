package org.adamas.dbtest;

import java.sql.Connection;
import java.sql.DriverManager;

import org.junit.Test;

//pom.xml을 통해 JDBC Jar 파일을 추가했고,
//데이터베이스의 연결이 제대로 되었는지 확인할 수 있게 테스트 코드를 작성해서 확인합니다.
public class JDBCTest {
	// Driver 로드 정보
	String driver = "com.mysql.jdbc.Driver";
	// url 정보
	String url = "jdbc:mysql://localhost:3306/adamas?serverTimezone=Asia/Seoul";
	// userID 정보
	String user = "root";
	// password 정보
	String pw = "1234";
	// 드라이브 로드
	
	// JDBC 연결 테스트 하기 위한 메서드
	@Test
	public void testConnection() throws Exception {
		Class.forName(driver);
		try(Connection con = DriverManager.getConnection(url, user,pw)){
			System.out.println("DB연결성공");
		} catch(Exception e) {
			e.printStackTrace();
		}
	}	
}

