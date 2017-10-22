package ch.prp.twt.repo;

public class IOUtils {
	
	public static void CleanUp(AutoCloseable statement, AutoCloseable rs) {
		if (null != statement) {
			try {
				statement.close();
			} catch (Exception e) {}
		}
		
		if (null != rs) {
			try {
				rs.close();
			} catch (Exception e) {}
		}

	}
}
