package ch.prp.bank.db;

import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.api.Assertions;

import ch.prp.bank.domain.Account;


public class BankDBTest {
	
	@Test
	public void addAccount_GetName() {
		BankDB.addAccount("Max Muster");
		Account acc = BankDB.findAccountByUID(1);
		
		Assertions.assertThat(acc.getName()).isEqualTo("Max Muster");
	}
	

	@Test
	public void deleteAcc() {
		BankDB.deleteAccount(1);
		List<Account> accs = BankDB.allAccounts();
		
		Assertions.assertThat(accs.size()).isEqualTo(0);
	}
	
	@Test
	public void testAccountGetNameAgain() {
		BankDB.addAccount("Max Muster");
		Account acc = BankDB.findAccountByUID(2);
		
		Assertions.assertThat(acc.getName()).isEqualTo("Max Muster");
	}

}
