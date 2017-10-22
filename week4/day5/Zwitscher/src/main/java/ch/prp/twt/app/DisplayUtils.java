package ch.prp.twt.app;

import java.util.List;

import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;
import ch.prp.twt.service.TweetService;
import ch.prp.twt.service.UserService;

public class DisplayUtils {
	static TweetService tweetService = TweetService.getInstance();
	static UserService userService = UserService.getInstance();

	public static void displayTweets(List<Tweet> tweetList) {
		tweetList.stream()
			.forEach(DisplayUtils::printTweet);
		System.out.println("");
	}
	
	private static void printTweet(Tweet tweet) {
		User user = userService.getUserById(tweet.getUserID());
		System.out.println(user.getUserName() + ": " + tweet.getTweetText());
	}
	
	public static void displayTweetsWithId(List<Tweet> tweetList) {
		tweetList.stream()
			.forEach(tweet -> System.out.println(tweet.getTweetID() + ": " + tweet.getTweetText()));
		System.out.println("");
	}
	
	static void testSuccess(boolean success, String onSuccess) {
		if (success) {
			System.out.println(onSuccess);
		} else {
			System.out.println("Something went wrong :(");
		}
	}
	
}
