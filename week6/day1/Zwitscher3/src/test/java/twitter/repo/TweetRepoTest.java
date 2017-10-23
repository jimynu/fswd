package twitter.repo;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.transaction.TestTransaction;
import org.springframework.transaction.annotation.Transactional;

import twitter.config.TestDataAccessConfig;
import twitter.domain.Tweet;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {TestDataAccessConfig.class, RepoConfig.class})
//@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@ActiveProfiles("dev")
@Sql("/test-data.sql") // executed for each test method!
@Transactional
public class TweetRepoTest {
	
	@Autowired
	TweetRepo tweetRepo;
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
		
	private void assertNum(int tweetNum) {
		List<Tweet> tweets = tweetRepo.findAll();
		assertThat(tweets.size()).isEqualTo(tweetNum);
	}
	
	private void insertTestTweet() {
		tweetRepo.save(new Tweet("user", "test REPO"));
	}

	private void printAllTweets(String title) {
		List<Tweet> tweets = tweetRepo.findAll();
		System.out.println("=== " + title + " ===");
		tweets.forEach(System.out::println);	
		System.out.println();
	}
	
	
	
	@Test
	public void T01_getAllTweets() {
		List<Tweet> tweets = tweetRepo.findAll();
		
		assertNum(2);
		assertThat(tweets.get(0).getText()).isEqualTo("test test test @president test");
		assertThat(tweets.get(1).getText()).isEqualTo("hello @president #yolo");
	}
	
	@Test
	public void T02_saveTweet() {
		insertTestTweet();
		assertNum(3);
		assertThat(tweetRepo.findAll().get(2).getText()).isEqualTo("test REPO");

		printAllTweets("state after saving one tweet");
		
		// tweet with exactly 140 characters
		String tweet140 = "test with more than 140 chars ------ test with more than 140 chars ------ test with more than 140 chars ------ at this point, we're at 140 -";
		System.out.println(tweet140.length());
		tweetRepo.save(new Tweet("user", tweet140));
		assertNum(4);

		// too long tweet
		tweetRepo.save(new Tweet("user", tweet140 + "over the limit!"));
		assertNum(4);
	}
	
	@Test
	public void T03_deleteById() {
		insertTestTweet();
		printAllTweets("state when deleteById test starts, including test tweet");
		
		tweetRepo.deleteById(2);
		assertNum(2);

		// delete non-existing
		tweetRepo.deleteById(2);
	}
	
	@Test
	public void deleteAll() {
		tweetRepo.deleteAll();
		assertNum(0);
	}


	@Test
	public void T04_count() {
		printAllTweets("state when count test starts");

		assertThat(tweetRepo.count()).isEqualTo(tweetRepo.findAll().size());
	}
	
	@Test
	public void T05_findById() {
		Tweet tweet = tweetRepo.findById(1);
		assertThat(tweet.getText()).isEqualTo("test test test @president test");

		// inexistent
		tweet = tweetRepo.findById(1234);
		assertThat(tweet).isEqualTo(null);
	}

	@Test
	public void T06_findByUsername() {
		List<Tweet> tweets = tweetRepo.findAllByUsername("ich");
		assertThat(tweets.size()).isEqualTo(1);
		
		insertTestTweet();
		insertTestTweet();
		tweets = tweetRepo.findAllByUsername("user");
		assertThat(tweets.size()).isEqualTo(2);

	}
	
	@Test
	public void T07_findAllUsernames() {
		assertNum(2);
		insertTestTweet();
		assertNum(3);
	}
	
	@Test
	public void T08_findAllContaining() {
		insertTestTweet();
		List<Tweet> tweets = tweetRepo.findAllContaining("test");
		assertThat(tweets.size()).isEqualTo(2);
		
		tweets = tweetRepo.findAllContaining("not in any tweet");
		assertThat(tweets.size()).isEqualTo(0);
		
		// upper-/lowercase (should be case insensitive)
		tweets = tweetRepo.findAllContaining("repo");
		assertThat(tweets.size()).isEqualTo(1);
		
		tweets = tweetRepo.findAllContaining("RePo");
		assertThat(tweets.size()).isEqualTo(1);
	}
	
}
