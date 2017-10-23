CREATE TABLE users (
	UserID VARCHAR(40) NOT NULL UNIQUE,
	UserName VARCHAR(40) NOT NULL UNIQUE,
	Password VARCHAR(40) NOT NULL
);

INSERT INTO users (UserID, UserName, Password) VALUES ('johnnyID', 'johnny', 'asdf');
INSERT INTO users (UserID, UserName, Password) VALUES ('trunkID', 'president_trunk', 'BestPresident');

CREATE TABLE tweets (
	TweetID VARCHAR(40) NOT NULL UNIQUE,
	UserID VARCHAR(40) NOT NULL,
	TweetText VARCHAR(255) NOT NULL
);

INSERT INTO tweets (TweetID, UserID, TweetText) VALUES ('firstID', 'johnnyID', 'Hello world');
INSERT INTO tweets (TweetID, UserID, TweetText) VALUES ('secondID', 'johnnyID', 'President Trunk is a dork!');
INSERT INTO tweets (TweetID, UserID, TweetText) VALUES ('thirdID', 'trunkID', 'I am the Best President.');
