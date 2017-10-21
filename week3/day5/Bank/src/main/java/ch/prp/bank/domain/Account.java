package ch.prp.bank.domain;

import lombok.Getter;
import lombok.Setter;

@Getter // lombok produces getters
@Setter // lombok produces setters
public class Account {
	String name;
	int uid;
	double balance; // real bank code would use "long" or self-defined data type
	
	public Account(String name, Integer uid, double balance) {
		this.name = name;
		this.uid = uid;
		this.balance = balance;
	}
	
	
}
