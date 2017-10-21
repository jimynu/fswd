package ch.prp.bank.domain;

public class Utils {
	private static int uidCounter = 0;
	
	public static int generateUID() {
		uidCounter++;
		return uidCounter;
	}
}
