package ch.prp.twt.repo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import static java.util.stream.Collectors.toList;


import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;
import ch.prp.twt.repo.DBConnection;

public class TweetRepo {

	// debug
//	public static void main(String[] args) throws SQLException {
//		getAllTweets();
//	}
	
	public List<Tweet> getAllTweets() {
		Statement statement = null;
		ResultSet rs = null;
		final String SELECT_ALL_TWEETS = "SELECT * FROM tweets";
		List<Tweet> tweetList = new ArrayList<Tweet>();
		
		try {
			Connection connection = DBConnection.get();
			statement = connection.createStatement();
			rs = statement.executeQuery(SELECT_ALL_TWEETS);
			
			while (rs.next()) { // process results
				String tweetID = rs.getString("TweetID");
				String userID = rs.getString("UserID");
				String text = rs.getString("TweetText");
				
				tweetList.add(new Tweet(tweetID, userID, text));
				
				// debug
//				System.out.print("Tweet Nr. ");
//				System.out.print(rs.getInt("TweetID") + " by user #");
//				System.out.print(rs.getInt("UserID") + ": ");
//				System.out.print(rs.getString("TweetText"));
//				System.out.println();
			}
			
		} catch (SQLException e) { System.err.println(e); }
		  finally { IOUtils.CleanUp(statement, rs); }
				
		return tweetList;
	}
	
	public List<Tweet> getTweetsByUser(User user) {
		List<Tweet> tweets = getAllTweets();
		return tweets.stream()
			.filter(tweet -> tweet.getUserID().equals(user.getUserID()))
			.collect(toList());
	}
	
	public boolean insertTweet(User user, String text) {
		
		final String INSERT_TWEET = "INSERT INTO tweets (TweetID, UserID, TweetText) VALUES ('" + UUID.randomUUID().toString() + "', '" + user.getUserID() + "', '" + text + "');";

		Statement statement = null;
		ResultSet rs = null;
		int rowsUpdated = 0;
		
		try {
			Connection connection = DBConnection.get();
			statement = connection.createStatement();
			rowsUpdated = statement.executeUpdate(INSERT_TWEET);
		} catch (SQLException e) { System.err.println(e); }
		  finally { IOUtils.CleanUp(statement, rs); }
		
		if (rowsUpdated == 0 ) {
			return false;
		} else {
			return true;
		}
		
	}
	
	public boolean deleteTweet(String tweetId, String userId) {

		final String DELETE_TWEET = "DELETE FROM tweets WHERE (TweetID = '" + tweetId + "' AND UserID = '" + userId + "');";

		Statement statement = null;
		ResultSet rs = null;
		int rowsUpdated = 0;
		
		try {
			Connection connection = DBConnection.get();
			statement = connection.createStatement();
			rowsUpdated = statement.executeUpdate(DELETE_TWEET);
		} catch (SQLException e) { System.err.println(e); }
		  finally { IOUtils.CleanUp(statement, rs); }
		

		if (rowsUpdated == 0 ) {
			return false;
		} else {
			return true;
		}
	}
	
	
	
	// singleton
	private static final TweetRepo INSTANCE = new TweetRepo();
	public static TweetRepo getInstance() {
		return INSTANCE;
	}
	
}
