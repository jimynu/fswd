package ch.prp.twt.service;

import java.util.ArrayList;
import java.util.List;

import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;
import ch.prp.twt.repo.TweetRepo;

public class TweetService {
	
	TweetRepo tweetRepo = TweetRepo.getInstance();
	
	public List<Tweet> getAllTweets() {
		return tweetRepo.getAllTweets();
	}
	
	public List<Tweet> getTweetsByUser(User user) {
		return tweetRepo.getTweetsByUser(user);
	}
	
	
	public boolean writeTweet(User user, String text) {
		return tweetRepo.insertTweet(user, text);
	}
	
	
	public boolean deleteTweet(String tweetId, String userId) {
		
		return tweetRepo.deleteTweet(tweetId, userId);
	}
	
	
	
	// singleton
	private static final TweetService INSTANCE = new TweetService();
	public static TweetService getInstance() {
		return INSTANCE;
	}
		
	
}
