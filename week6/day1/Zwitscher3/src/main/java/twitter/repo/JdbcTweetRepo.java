package twitter.repo;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.RowMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import twitter.domain.Tweet;

@Repository
public class JdbcTweetRepo implements TweetRepo {
	
	private final int CHAR_LIMIT = 140;
	
	private final TweetMapper tweetMapper = new TweetMapper();

	private final JdbcTemplate jdbcTemplate;
	@Autowired
	private JdbcTweetRepo(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	
	@Override
	public void save(Tweet tweet) {
		if (tweet.getText().length() <= CHAR_LIMIT) {
			String sqlInsert = "INSERT INTO tweets (author, text) VALUES (?, ?);";
			jdbcTemplate.update(sqlInsert, tweet.getAuthor(), tweet.getText());
		}
	}
	
	@Override
	public void deleteById(Integer id) {
		String sqlDelete = "DELETE FROM tweets WHERE id=?;";
		jdbcTemplate.update(sqlDelete, id);
	}
	
	@Override
	public void deleteAll() {
		jdbcTemplate.update("DELETE FROM tweets");
	}
	
	

	
	@Override
	public int count() {
		String sqlQuery = "SELECT count(*) FROM tweets";
		return jdbcTemplate.queryForObject(sqlQuery, Integer.class);
	}
	
	@Override
	public Tweet findById(Integer id) {
		Tweet tweet = null;
		String sqlQuery = "SELECT * FROM tweets WHERE id=?";
		
		try { tweet = jdbcTemplate.queryForObject(sqlQuery, tweetMapper, id); }
		catch (DataAccessException e) { }
		
		return tweet;
	}
	
	@Override
	public List<Tweet> findAll() {
		String sqlQuery = "SELECT * FROM tweets";
		return jdbcTemplate.query(sqlQuery, tweetMapper);
	}
	
	@Override
	public List<Tweet> findAllByUsername(String username) {
		String sqlQuery = "SELECT * FROM tweets WHERE author LIKE ?";
		return jdbcTemplate.query(sqlQuery, tweetMapper, username);
	}
	
	@Override
	public List<Tweet> findAllContaining(String searchText) {
		String sqlQuery = "SELECT * FROM tweets WHERE LOWER(text) LIKE LOWER(?)";
		return jdbcTemplate.query(sqlQuery, tweetMapper, "%" + searchText + "%");
	}
	
	
	
	// to be moved to UserRepo later
	
	@Override
	public List<String> findAllUsernames() {
		String sqlQuery = "SELECT DISTINCT author FROM tweets";
		return jdbcTemplate.query(sqlQuery, (rs, num) -> {
				return rs.getString("author");
			});
	}
	
}
