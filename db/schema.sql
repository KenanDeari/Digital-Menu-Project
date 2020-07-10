-- DROP DATABASE IF EXISTS paraiso_lb_db;
CREATE DATABASE druid_db;
USE druid_db;

CREATE TABLE paraiso (
   id INT NOT NULL AUTO_INCREMENT,
   section VARCHAR(20),
   item VARCHAR(40) NOT NULL,
   descrip VARCHAR(250) NOT NULL,
   price INT,
   PRIMARY KEY (id)
);

-- CREATE TABLE user (
--    id INT NOT NULL AUTO_INCREMENT,
--    email VARCHAR(20),
--    password VARCHAR(40) NOT NULL,
--    PRIMARY KEY (id)
-- );



