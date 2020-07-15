DROP DATABASE IF EXISTS druid_db;
CREATE DATABASE druid_db;
USE druid_db;

CREATE TABLE Paraiso (
   id INT NOT NULL AUTO_INCREMENT,
   section VARCHAR(100),
   item VARCHAR(100) NOT NULL,
   descrip VARCHAR(500) NULL,
   price INT,
   deleted BOOLEAN DEFAULT false,
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



