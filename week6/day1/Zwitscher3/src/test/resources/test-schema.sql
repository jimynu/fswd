DROP table tweets IF EXISTS;

CREATE TABLE tweets (
        id INTEGER IDENTITY,
        author VARCHAR(30),
        text VARCHAR(140)
);
