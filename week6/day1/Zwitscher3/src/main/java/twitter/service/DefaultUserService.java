package twitter.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import twitter.repo.TweetRepo;

@Service
@Transactional(readOnly = true)
public class DefaultUserService implements UserService {
	
	private final TweetRepo tweetRepo;
	
	@Autowired
	private DefaultUserService(TweetRepo tweetRepo) {
		this.tweetRepo = tweetRepo;
	}

	@Override
	public List<String> findAllUsernames() {
		return this.tweetRepo.findAllUsernames();
	}
	
	
	
}
