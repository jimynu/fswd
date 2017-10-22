package ch.prp.twt.repo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBConnection {
		
	private static final String URL = "jdbc:hsqldb:file:/Users/jimynu/Desktop/Propulsion/code/week4/day5/Zwitscher/db";
	private static final String USER = "SA";
	private static final String PWD = "";
	
	Connection connection = null;
	
	private Connection open() {
		try {
			connection = DriverManager.getConnection(URL, USER, PWD);
//			System.out.println("Connection " + connection + " opened successfully.");
			return connection;
		} catch (SQLException e) { 
			System.out.println("Connection " + connection + " couldn't be opened!");
			throw new RuntimeException(e);
		} 
	}
	
	// singleton
	private static final DBConnection INSTANCE = new DBConnection();
	public static Connection get() {
		return INSTANCE.open();
	}

}
