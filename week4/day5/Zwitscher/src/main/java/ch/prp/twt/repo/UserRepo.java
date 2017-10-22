package ch.prp.twt.repo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import ch.prp.twt.domain.User;
import ch.prp.twt.repo.DBConnection;

public class UserRepo {
	
	// debug
//	public static void main(String[] args) throws SQLException {
//		getAllTweets();
//	}
	
	public List<User> getAllUsers() {
		Statement statement = null;
		ResultSet rs = null;
		final String SELECT_ALL_USERS = "SELECT * FROM users";
		List<User> userList = new ArrayList<User>();
		
		try {
			Connection connection = DBConnection.get();
			statement = connection.createStatement();
			rs = statement.executeQuery(SELECT_ALL_USERS);
			
			while (rs.next()) { // process results
				String userID = rs.getString("UserID");
				String name= rs.getString("UserName");
				String pw = rs.getString("Password");
				
				userList.add(new User(userID, name, pw));
				
				// debug
//				System.out.print("Tweet Nr. ");
//				System.out.print(rs.getInt("TweetID") + " vong user #");
//				System.out.print(rs.getInt("UserID") + ": ");
//				System.out.print(rs.getString("TweetText"));
//				System.out.println();
			}
			
		} catch (SQLException e) { System.err.println(e); }
		  finally { IOUtils.CleanUp(statement, rs); }
		
		return userList;
	}
	
	
	public User getUserById(String userID) {
		ArrayList<User> userList = (ArrayList<User>) getAllUsers();
		
		return userList.stream()
			.filter(user -> user.getUserID().equals(userID))
			.findAny()
			.orElse(null);
	}

	
	public User getUserByName(String username) {
		ArrayList<User> userList = (ArrayList<User>) getAllUsers();
		
		return userList.stream()
			.filter(user -> user.getUserName().equals(username))
			.findAny()
			.orElse(null);
	}
	
	
	public User insertUser(String username, String password) {
		final String INSERT_USER = "INSERT INTO users (UserID, UserName, Password) VALUES ('" + UUID.randomUUID().toString() + "', '" + username + "', '" + password + "');";
		Statement statement = null;
		ResultSet rs = null;
		int rowsUpdated = 0;
		
		try {
			Connection connection = DBConnection.get();
			statement = connection.createStatement();
			rowsUpdated = statement.executeUpdate(INSERT_USER);
		} catch (SQLException e) { System.err.println(e); }
		  finally { IOUtils.CleanUp(statement, rs); }
		
		if (rowsUpdated == 0 ) {
			System.out.println("Something went wrong...");
			return null;
		} else {
			return getUserByName(username);
		}
		
	}
	
	// singleton
	private static final UserRepo INSTANCE = new UserRepo();
	public static UserRepo getInstance() {
		return INSTANCE;
	}
	
}
