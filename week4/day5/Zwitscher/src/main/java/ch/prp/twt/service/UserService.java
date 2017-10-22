package ch.prp.twt.service;

import ch.prp.twt.domain.User;
import ch.prp.twt.repo.UserRepo;

public class UserService {
	UserRepo userRepo = UserRepo.getInstance();

	public User login(String username, String password) {
		User user = userRepo.getUserByName(username);

		if (user == null) {
			System.out.println("No user by that name.");
			return null;
		} else if (user.getPassword().equals(password)) { // Strings: compare with .equals!!! "==" compares reference!!
			return user;
		} else {
			System.out.println("Wrong password!");
			return null;
		}
	}

	public User register(String username, String password) {
		
		// empty line/too short check
		if (username.length() < 3) {
			System.out.println("Your username should have at least 3 characters.");
			return null;
		}
		
		// check if username is taken
		if (userRepo.getUserByName(username) != null) {
			System.out.println("This username is already taken.");
			return null;
		}
		
		// check password
		if (password.length() < 3) {
			System.out.println("Your password should have at least 3 characters.");
			return null;
		}
		
		return userRepo.insertUser(username, password);
	}
	
	public void logout() {
		// for now, logout = not calling menu again
	}
	
	public User getUserById(String id) {
		return userRepo.getUserById(id);
	}
	
	
	
	// singleton
	private static final UserService INSTANCE = new UserService();
	public static UserService getInstance() {
		return INSTANCE;
	}
}
