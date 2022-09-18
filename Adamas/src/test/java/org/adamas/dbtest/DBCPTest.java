package org.adamas.dbtest;

import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.ContextConfiguration;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class DBCPTest {
   @Autowired
   private DataSource dataSource;
   
   // DBCP 를 테스트 하기 위한 메서드임을 springframe에게 전달
   @Test
   public void testConnection() {
      try(Connection con = dataSource.getConnection()){
         System.out.println("DBCP 연결 성공");
      }catch(Exception e) {
         e.getMessage();
      }
   }
   
}


