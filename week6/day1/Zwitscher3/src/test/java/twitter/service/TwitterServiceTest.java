package twitter.service;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import twitter.config.DataAccessConfig;
import twitter.config.TestDataAccessConfig;
import twitter.domain.Tweet;

@RunWith(SpringRunner.class)
@ContextConfiguration(classes = {ServiceConfig.class, TestDataAccessConfig.class})
@ActiveProfiles("dev")
@Sql("/test-data.sql")
@Transactional
public class TwitterServiceTest {
	
	@Autowired
	TweetService tweetService;
	
	
	@Test
	public void findAllMentioningUsername() {
		List<Tweet> tweets = tweetService.findAllMentioningUsername("pres");
		tweets.forEach(System.out::println);
		assertThat(tweets.size()).isEqualTo(2);
		System.out.println();
	}
	
	@Test
	public void findAllContainingHashTag() {
		List<Tweet> tweets = tweetService.findAllContainingHashTag("yolo");
		tweets.forEach(System.out::println);
		assertThat(tweets.size()).isEqualTo(1);
		System.out.println();
	}
	
}
