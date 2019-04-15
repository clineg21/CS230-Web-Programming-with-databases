-- create and select the database


DROP DATABASE IF EXISTS Lab6;
CREATE DATABASE Lab6;
USE Lab6;

CREATE TABLE Authors (
	AuthorID				INT					NOT NULL 				AUTO_INCREMENT,
	AuthorFirstName			VARCHAR(60)			NOT NULL,
	AuthorLastName			VARCHAR(60)			NOT NULL,
	PRIMARY KEY(AuthorID)
);


CREATE TABLE Books (
	ISBN					VARCHAR(15)			NOT NULL,
	Title					VARCHAR(75)			NOT NULL,
	Price					DECIMAL(10, 2)		NOT NULL,
	PRIMARY KEY(ISBN)
);

CREATE TABLE BookAuthor (
	ISBN					VARCHAR(15)			NOT NULL,
	AuthorID				INT					NOT NULL,
	PRIMARY KEY(ISBN, AuthorID)
);

CREATE TABLE ZipCodes (
	ZipCode					VARCHAR(10)			NOT NULL,
	City					VARCHAR(60)			NOT NULL,
	state					VARCHAR(60)			NOT NULL,
	PRIMARY KEY(ZipCode)	
);

CREATE TABLE Customers (
	CustomerID 				INT					NOT NULL				AUTO_INCREMENT,
	CustomerFirstName		VARCHAR(60)			NOT NULL,
	CustomerLastName		VARCHAR(60)			NOT NULL,
	StreetAddress			VARCHAR(60)			NOT NULL,
	ZipCode					VARCHAR(10)			NOT NULL,
	PRIMARY KEY(CustomerID),
	CONSTRAINT customersFkZipCode
		FOREIGN KEY (zipCode) REFERENCES ZipCodes (ZipCode)
);

CREATE TABLE Purchases (
	PurchaseID				INT					NOT NULL				AUTO_INCREMENT,
	PurchaseDate			DATE				NOT NULL,
	ISBN					VARCHAR(15)			NOT NULL,
	CustomerID				VARCHAR(10)			NOT NULL,
	PRIMARY KEY(PurchaseID),
	CONSTRAINT purchasesFkISBN
		FOREIGN KEY (ISBN) REFERENCES Books (ISBN), 
	CONSTRAINT purchasesFkCustomerID
		FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
);