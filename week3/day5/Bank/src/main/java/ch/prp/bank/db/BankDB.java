package ch.prp.bank.db;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import ch.prp.bank.domain.Account;
import ch.prp.bank.domain.Utils;

public class BankDB {
	// hash map: unique id
	private static Map<Integer, Account> db = new HashMap<>();
	
	public static void addAccount(String name) {
		Integer uid = Utils.generateUID();
		BankDB.db.put(uid, new Account(name, uid, 0));
//		debug
//		System.out.println(uid /* + ": " + db.get(uid) */);
	}

	public static void deleteAccount(int uid) {
		if (db.containsKey(uid)) {
			db.remove(uid);
		}
	}

	public static Account findAccountByUID(int uid) {
		return db.get(uid); // could be *null*!
	}
	
	public static List<Account> findAccountByName(String name) {
		List<Account> accounts = allAccounts();
		
		List<Account> found = new ArrayList<Account>();
		
		for (Account a : accounts) {
			if (a.getName().toLowerCase().contains(name.toLowerCase())) {
				found.add(a);
			}
		}
		
		return found;
	}

	public static List<Account> allAccounts() {
		return new ArrayList<Account>(db.values());
	}

	// false: no such account
	public static boolean credit(int uid, double amount) {
		if (db.containsKey(uid)) {
			double newBalance = db.get(uid).getBalance() + amount;
			db.get(uid).setBalance(newBalance);
			return true;
		} else {
			return false;
		}
			
	}

	// two points of failure: no such account; not enough money
	// returns "false" in both cases, for the sake of simplicity
	public static boolean debit(int uid, double amount) {
		if (db.containsKey(uid)) {
			// check if enough money
			if ( db.get(uid).getBalance() >= amount) {
				double newBalance = db.get(uid).getBalance() - amount;
				db.get(uid).setBalance(newBalance);
				return true;
			} else {
				System.out.println("Not enough money");
				return false;
			}
		} else {
			return false;
		}
	}
	
}