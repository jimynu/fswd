package ch.prp.twt.repo;

import static org.junit.Assert.assertTrue;

import java.util.List;

import org.junit.Test;

import ch.prp.twt.domain.Tweet;
import ch.prp.twt.domain.User;

public class UserRepoTest {

	UserRepo repo = UserRepo.getInstance();
	
	private static User johnny = new User("johnnyID", "johnny", "asdf");
	
	@Test
	public void getAllUsers() {
		List<User> users = repo.getAllUsers();
		assertTrue(users.size() == 2);
	}
	
	@Test
	public void getUserById() {
		User user = repo.getUserById(johnny.getUserID());
		assertTrue(user.getUserName().equals(johnny.getUserName()));
	}
	
	@Test
	public void getUserByName() {
		User user = repo.getUserByName(johnny.getUserName());
		assertTrue(user.getUserID().equals(johnny.getUserID()));
	}
}
