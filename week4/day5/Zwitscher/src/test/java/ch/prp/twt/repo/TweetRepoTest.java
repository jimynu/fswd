package ch.prp.twt.repo;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;

import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;

public class TweetRepoTest {

	TweetRepo repo = TweetRepo.getInstance();
	
	private static User johnny = new User("johnnyID", "johnny", "asdf");
	
	@Test
	public void getTweetsByUser() {
		List<Tweet> tweets = repo.getTweetsByUser(johnny);
		assertTrue(tweets.size() == 2);
	}
	
	@Test
	public void getAllTweets() {
		List<Tweet> tweets = repo.getAllTweets();
		assertTrue(tweets.size() == 3);
	}
	
	@Test
	public void insert_delete() {
		assertTrue(repo.getTweetsByUser(johnny).size() == 2);
		repo.insertTweet(johnny, "test");
		
		assertTrue(repo.getTweetsByUser(johnny).size() == 3);

		List<Tweet> tweets = repo.getTweetsByUser(johnny);
		repo.deleteTweet(tweets.get(2).getTweetID(), "johnnyID");
		assertTrue(repo.getTweetsByUser(johnny).size() == 2);

	}
}
