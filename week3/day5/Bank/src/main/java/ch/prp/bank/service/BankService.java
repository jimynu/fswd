package ch.prp.bank.service;

import java.util.List;

import ch.prp.bank.domain.Account;
import ch.prp.bank.db.BankDB;


public class BankService {
	public static void newAccount(String name) {
		BankDB.addAccount(name);
	}
	
	public static void deleteAccount(int uid) {
		BankDB.deleteAccount(uid);
	}
	
	public static Account findAccountByUID(int uid) {
		return BankDB.findAccountByUID(uid); // can be "null"!
	}
	
	public static List<Account> findAccountByName(String name) {
		return BankDB.findAccountByName(name);
	}
	
	public static List<Account> allAccounts() {
		return BankDB.allAccounts();
	}
	
	public static boolean credit(int uid, double amount) { // returns true on success
		return BankDB.credit(uid, amount);
	}
	
	public static boolean debit(int uid, double amount) { // returns true on success
		return BankDB.debit(uid, amount);
	}
}
