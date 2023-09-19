CREATE DATABASE college;
USE college;

CREATE TABLE student (
rollno INT,
name VARCHAR(30),
age INT
);

INSERT INTO student
VALUES
(101,"adam",14),
(102,"bob",12);

SELECT * FROM student;

create database instagram;

use instagram;

create table user (
id int,
age int,
name varchar(30),
email varchar(50),
followers int default 0,
following int,
constraint check (age >=13 ),
primary key (id)
);

create table post (
id int primary key,
content varchar(100),
user_id int,
foreign key(user_id) references user(id)
);

use instagram;

insert into user
(id, age, name, email, followers, following)
values
(1,14, "adam", "adam@yahoo.in", 123, 145),
(2,15, "bob", "bob@gmail.com", 200, 200),
(3,16, "casey", "casey@yahoo.in", 300, 306),
(4,17, "donald", "donald@gmail.com", 200, 105);

select distinct age from user;

select name, followers
from user
where followers >= 200;