package twitter.repo;

import java.util.List;

import org.springframework.stereotype.Repository;

import twitter.domain.Tweet;

@Repository
public interface TweetRepo {
	void save(Tweet tweet);
	void deleteById(Integer id);
	void deleteAll();

	List<Tweet> findAll();
	Tweet findById(Integer id);
	int count();
	List<Tweet> findAllByUsername(String username);
	List<Tweet> findAllContaining(String searchText);
	
	List<String> findAllUsernames();
}
