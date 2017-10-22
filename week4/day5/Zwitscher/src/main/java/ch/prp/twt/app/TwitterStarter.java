package ch.prp.twt.app;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;
import ch.prp.twt.service.TweetService;
import ch.prp.twt.service.UserService;


class TwitterStarter {
	
	static Scanner sc = new Scanner(System.in);
	
	public static void main(String[] args) {
		
		while(true) {
			// login/register
			User user = mainMenu();
			
			if (user != null) { // successfully logged in/registered

				System.out.println("Hi, " + user.getUserName() + "!");
				System.out.println("");
				
				userMenu(user);	
			}
		}
	}
	
	
	
	private static User mainMenu() {
		UserService userService = UserService.getInstance();
		User user = null;
		
		System.out.println("======= Zwitscher =======");
		System.out.println("(1) login");
		System.out.println("(2) register");
		System.out.println("=========================");
		
		Integer option = sc.nextInt();
		sc.nextLine();
		System.out.println(option);
					
		switch (option) {
			case 1: // login
				System.out.print("User name: ");
				String username = sc.nextLine();
				System.out.print("Password: ");
				String password = sc.nextLine();
				
				user = userService.login(username, password);
				break;
			case 2: // register
				System.out.print("Desired user name: ");
				String desiredUsername = sc.nextLine();
				System.out.print("Desired password: ");
				String desiredPassword = sc.nextLine();
				
				user = userService.register(desiredUsername, desiredPassword);
				break;
			default:
				break;
		}

		return user;		
	}
	
	
	
	private static void userMenu(User user) {
		TweetService tweetService = TweetService.getInstance();
		UserService userService = UserService.getInstance();
		
		System.out.println("===== Please choose =====");
		System.out.println("(1) see all zwitschs");
		System.out.println("(2) write a new zwitsch ");
		System.out.println("(3) delete a zwitsch");
		System.out.println("(4) log out");
		System.out.println("=========================");
		
		Integer option = sc.nextInt();
		sc.nextLine();
		
		// perform specified action (1-4)
		switch (option) {
			case 1: // show all
				ArrayList<Tweet> tweets = (ArrayList<Tweet>) tweetService.getAllTweets();
				DisplayUtils.displayTweets(tweets);

				userMenu(user);
				break;

			case 2: // write
				System.out.println("What do you want to zwitscher?");
				String text = sc.nextLine();
				if (! text.equals("") ) {
					boolean success = tweetService.writeTweet(user, text);
					DisplayUtils.testSuccess(success, "Zwitsch posted.");
				} else {
					System.out.println("Please enter text.");
				}
				userMenu(user);
				break;
				
			case 3: // delete
				List<Tweet> tweetsByUser = tweetService.getTweetsByUser(user);
				DisplayUtils.displayTweetsWithId(tweetsByUser);
				
				System.out.println("Which tweet do you want to delete? (copy ID)");
				String tweetId = sc.nextLine();
				System.out.println();
				
				boolean success = tweetService.deleteTweet(tweetId, user.getUserID());
				DisplayUtils.testSuccess(success, "Zwitsch deleted.");
				userMenu(user);
				break;
				
			case 4: // log out
				userService.logout();
				break;
				
			default:
				userMenu(user);
				break;
		}
	}

}
