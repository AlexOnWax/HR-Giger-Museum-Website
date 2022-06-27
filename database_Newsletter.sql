CREATE DATABASE DbGiger;

CREATE TABLE Mail(
idNewsletter INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(255) NOT NULL UNIQUE, 
date DATE DEFAULT NOW());


CREATE USER '####'@'localhost' IDENTIFIED BY '####';
GRANT ALL PRIVILEGES ON DbGiger.* TO '####'@'localhost';
FLUSH PRIVILEGES;
