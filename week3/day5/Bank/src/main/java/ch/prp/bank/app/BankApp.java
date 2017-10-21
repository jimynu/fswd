package ch.prp.bank.app;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import ch.prp.bank.domain.Account;
import ch.prp.bank.service.BankService;

public class BankApp {

	public static void main(String[] args) {		
		
		System.out.println("Ohai! Thanks for visiting THE BANK!");
		try (Scanner sc = new Scanner(System.in)) {
			printInitialBlock(); // print initial explanations once
			
			while (true) {
				//printInitialBlock();
				System.out.println("What do you want to do?");

				// workaround - we want an int, but nextInt doesn't consume nextline character...
				String optionString = sc.nextLine();
				Integer option = 0;
				try {
					option = Integer.parseInt(optionString);
				} catch (NumberFormatException e) {}
				
				// perform specified action (1-7)
				switch (option) {
				
				case 1: // new customer
					newAcc(sc);
					break;
				case 2: // print out all customers
					printAllAcc();
					break;
				case 3: // search customer by name
					seachByName(sc);
					break;
				case 4: // search customer by ID
					searchById(sc);
					break;
				case 5: // delete customer
					deleteAcc(sc);
					break;
				case 6: // deposit money
					deposit(sc);
					break;
				case 7: // withdraw money
					withdraw(sc);
					break;
				default:
					break;
				}
			}
		}
	}

	private static void printInitialBlock() {
		System.out.println("(1) new customer");
		System.out.println("(2) print out all customers");
		System.out.println("(3) search customer by name");
		System.out.println("(4) search customer by ID");
		System.out.println("(5) delete customer");
		System.out.println("(6) deposit money");
		System.out.println("(7) withdraw money");
	}

	private static void newAcc(Scanner sc) {
		System.out.println("Name?");
		String name = sc.nextLine();
		BankService.newAccount(name);
		System.out.println(""); // empty line
	}
	
	private static void printAllAcc() {
		List<Account> accounts = BankService.allAccounts();
		
		if (accounts.size() != 0) {
			for (Account account : accounts) {
				System.out.println("account no. " + account.getUid() + ": " + account.getName() + " - " + account.getBalance());
			}
		} else {
			System.out.println("There are no accounts.");
		}
		
		
		
		System.out.println(""); // empty line
	}
	
	private static void seachByName(Scanner sc) {
		System.out.println("Name?");
		String name = sc.nextLine();
		
		List<Account> accounts = BankService.findAccountByName(name);
		
		if (accounts.size() == 0) {
			System.out.println("No account found.");
		}

		for (Account account : accounts) {
			System.out.println("account no. " + account.getUid() + ": " + account.getName() + " - " + account.getBalance());
		}
		
		System.out.println(""); // empty line
		
	}

	private static void searchById(Scanner sc) {
		System.out.println("ID?");
		String id = sc.nextLine();
		Integer uid = 0;
		try {
			uid = Integer.parseInt(id);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}

		Account account = BankService.findAccountByUID(uid);
		
		if (account != null) {
			System.out.println("account no. " + account.getUid() + ": " + account.getName() + " - " + account.getBalance());
		} else {
			System.out.println("not found");
		}
		
		System.out.println(""); // empty line
		
	}

	private static void deleteAcc(Scanner sc) {
		System.out.println("ID?");
		String id = sc.nextLine();
		Integer uid = 0;
		try {
			uid = Integer.parseInt(id);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}

		Account account = BankService.findAccountByUID(uid);
		
		if (account != null) {
			BankService.deleteAccount(uid);
			System.out.println("Deleted account.");
		} else {
			System.out.println("not found");
		}
		
		System.out.println(""); // empty line
		
	}

	private static void deposit(Scanner sc) {
		// get id
		System.out.println("ID?");
		String id = sc.nextLine();
		Integer uid = 0;
		try {
			uid = Integer.parseInt(id);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}
		
		// check if there is an account with that ID
		Account account = BankService.findAccountByUID(uid);
		
		if (account == null) {
			System.out.println("No account by that ID.");
			return;
		}

		// get amount
		System.out.println("Amount?");
		String amountStr = sc.nextLine();
		Double amount;
		try {
			amount = Double.parseDouble(amountStr);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}
		
		// credit
		if (BankService.credit(uid, amount)) {
			System.out.println("Credited.");
		} else {
			System.out.println("Fail!");
		}
		
		System.out.println(""); // empty line
	}

	private static void withdraw(Scanner sc) {
		// get id
		System.out.println("ID?");
		String id = sc.nextLine();
		Integer uid = 0;
		try {
			uid = Integer.parseInt(id);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}
		
		// check if there is an account with that ID
		Account account = BankService.findAccountByUID(uid);
		
		if (account == null) {
			System.out.println("No account by that ID.");
			return;
		}

		// get amount
		System.out.println("Amount?");
		String amountStr = sc.nextLine();
		Double amount;
		try {
			amount = Double.parseDouble(amountStr);
		} catch (NumberFormatException e) {
			System.out.println("Please enter a valid number.");
			return;
		}
		
		// debit
		if (BankService.debit(uid, amount)) {
			System.out.println("Debited.");
		} else {
			System.out.println("Fail!");
		}
		
		System.out.println(""); // empty line
	}

}
