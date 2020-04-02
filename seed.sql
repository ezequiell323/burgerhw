USE burger_db;

CREATE TABLE BURGER(
ID INT auto_increment,
BURGER_NAME varchar(45),
DEVOURED boolean DEFAULT false,
PRIMARY KEY (ID)
);