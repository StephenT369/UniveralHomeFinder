CREATE DATABASE homefinder_db;
USE homefinder_db;

CREATE TABLE users (
userKey INT NOT NULL AUTO_INCREMENT,
firstLastName VARCHAR (100),
email VARCHAR (100),
pass VARCHAR (12),
dob date,
	PRIMARY KEY (userKey)
);