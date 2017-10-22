package ch.prp.twt.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class User {
	private final String userID;
	private final String userName;
	private String password;
	
	public User(String id, String name, String pw) {
		this.userID = id;
		this.userName = name;
		this.password = pw;
	}
}
