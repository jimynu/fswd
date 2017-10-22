package ch.prp.twt.domain;

import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class Tweet {
	private final String tweetID;
	private final String userID;
	private String tweetText;
	
	public Tweet(String tweetID, String userID, String text) {
		this.tweetID = tweetID;
		this.userID = userID;
		this.tweetText = text;
	}
}
