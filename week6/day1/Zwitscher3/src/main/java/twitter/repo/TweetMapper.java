package twitter.repo;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import twitter.domain.Tweet;

public class TweetMapper implements RowMapper<Tweet> {

	@Override
	public Tweet mapRow(ResultSet rs, int rowNum) throws SQLException {
		return new Tweet(
			rs.getInt("id"),
			rs.getString("author"),
			rs.getString("text")
		);
	}
}
