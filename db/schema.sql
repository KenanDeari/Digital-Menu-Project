-- DROP DATABASE IF EXISTS paraiso_lb_db;
CREATE DATABASE druid_db;
USE druid_db;

CREATE TABLE Paraiso (
   id INT NOT NULL AUTO_INCREMENT,
   section VARCHAR(40),
   item VARCHAR(60) NOT NULL,
   descrip VARCHAR(500) NOT NULL,
   price INT,
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY (id)
);

-- CREATE TABLE user (
--    id INT NOT NULL AUTO_INCREMENT,
--    email VARCHAR(20),
--    password VARCHAR(40) NOT NULL,
--    PRIMARY KEY (id)
-- );



