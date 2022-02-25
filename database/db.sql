CREATE DATABASE colektia;
USE colektia;
CREATE TABLE employee (
    id VARCHAR(255) NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    documentnumber INT, 
    image VARCHAR(255),
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    password VARCHAR(255),
    disabled BOOLEAN
);