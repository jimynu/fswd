 package twitter.service;

import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import twitter.domain.Tweet;
import twitter.repo.TweetRepo;

@Service
@Transactional(readOnly = true)
public class DefaultTweetService implements TweetService {

	private static final Logger logger = LogManager.getLogger("ZwitscherService");

	private final TweetRepo tweetRepo;
//	private final JavaMailSender mailSender;
	
	@Autowired
	private DefaultTweetService(TweetRepo tweetRepo) {
		this.tweetRepo = tweetRepo;
//		this.mailSender = mailSender;
	}
	
	
	@Transactional(readOnly = false)
	public void save(Tweet tweet) {
		logger.info("Saving tweet by @" + tweet.getAuthor() + " with content" + tweet.getText());
		// TODO: check if not more than 140 chars (and not 0)
		this.tweetRepo.save(tweet);
	}
	
	@Transactional(readOnly = false)
	public void deleteById(Integer id) {
		logger.info("Deleting tweet with ID " + id);
		tweetRepo.deleteById(id);
	}
	
	public Tweet findById(Integer id) { // can be null
		logger.info("Searching for tweet with ID " + id);
		return tweetRepo.findById(id);
	}
	
	public List<Tweet> findAll() {
		logger.info("Getting a list of all tweets");
		return tweetRepo.findAll();
	}
	
	public List<Tweet> findAllByUsername(String username) {
		logger.info("Searching for tweets by @" + username);
		return tweetRepo.findAllByUsername(username);
	}
	
	public List<Tweet> findAllContainingHashTag(String hashTag) {
		logger.info("Finding all tweets containing #" + hashTag);
		return tweetRepo.findAllContaining("#" + hashTag);
	}
	
	public List<Tweet> findAllMentioningUsername(String username) {
		logger.info("Finding all tweets mentioning @" + username);
		return tweetRepo.findAllContaining("@" + username);
	}
}
