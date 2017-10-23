package twitter.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Tweet {
	private Integer id;
	
	private String author;
	
	private String text;
	
	public Tweet(String author, String text) {
		this.author = author;
		this.text = text;
	}
}
