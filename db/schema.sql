DROP DATABASE homefinder_db;
CREATE DATABASE homefinder_db;
USE homefinder_db;

CREATE TABLE users (
userKey INT NOT NULL AUTO_INCREMENT,
firstLastName VARCHAR (100),
email VARCHAR (100),
password VARCHAR (12),
	PRIMARY KEY (userKey)
);