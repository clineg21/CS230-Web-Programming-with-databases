DROP DATABASE IF EXISTS Program3;
CREATE DATABASE Program3;
USE Program3;

CREATE TABLE SalesOffice (
	SalesOffice					VARCHAR(30)		NOT NULL,
	SalesZip					VARCHAR(10)		NOT NULL,
	SalesCity					VARCHAR(60)		NOT NULL,
	SalesNumber					VARCHAR(10)		NOT NULL,
	PRIMARY KEY(SalesOffice)
);

CREATE TABLE SalesPerson (
	SalesPersonID				INT				NOT NULL			AUTO_INCREMENT,
	SalesPersonFirstName		VARCHAR(60)		NOT NULL,
	SalesPersonLastName			VARCHAR(60)		NOT NULL,
	SalesOffice					VARCHAR(30)		NOT NULL,
	PRIMARY KEY(SalesPersonID),
	CONSTRAINT salespersonFksalesoffice
		FOREIGN KEY (SalesOffice) REFERENCES SalesOffice (SalesOffice)
);

CREATE TABLE Customers (
	CustomerID					INT				NOT NULL			AUTO_INCREMENT,
	Customer 					VARCHAR(20)		NOT NULL,
	PRIMARY KEY(CustomerID)
);

CREATE TABLE StafftoCustomer (
	SalesPersonID				INT				NOT NULL,
	CustomerID					INT				NOT NULL,
	CONSTRAINT stafftocustomerFkSalesPersonID
		FOREIGN KEY (SalesPersonID) REFERENCES SalesPerson (SalesPersonID),
	CONSTRAINT stafftocustomerFkCustomerID
		FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
);	

CREATE TABLE SalesAssignments (
	SalesPersonID					INT				NOT NULL,
	Customer1						VARCHAR(15),
	Customer2						VARCHAR(15),
	Customer3						VARCHAR(15),
	PRIMARY KEY(SalesPersonID)
);

INSERT INTO SalesOffice
	(SalesOffice, SalesZip, SalesCity, SalesNumber)
VALUES
	('Headquarters', 12345, 'Chicago','312-555-1212'),
	('New York', 54321, 'Albany', '212-555-1212'),
	('Washington', 15234, 'Seattle', '112-555-1212');

INSERT INTO SalesPerson
	(SalesPersonFirstName, SalesPersonLastName, SalesOffice)
VALUES
	('Mary', 'Smith', 'Headquarters'),
	('John', 'Hunt', 'New York'),
	('Martin', 'Hap', 'Headquarters'),
	('Susie', 'Que', 'New York'),
	('Robert', 'Davis', 'Washington');
	
INSERT INTO Customers
	(Customer)
VALUES
	('Ford'),
	('GM'),
	('Dell'),
	('HP'),
	('Apple'),
	('Boeing'),
	('IBM');
	
INSERT INTO StafftoCustomer
	(SalesPersonID, CustomerID)
VALUES
	(1, 1),
	(1, 2),
	(2, 3),
	(2, 4),
	(2, 5),
	(3, 6),
	(3, 2),
	(4, 7),
	(5, 5),
	(5, 7);
	

		
INSERT INTO SalesAssignments
	(SalesPersonID, Customer1, Customer2, Customer3)
VALUES
	(1, 'Ford', 'GM', ''),
	(2, 'Dell', 'HP', 'Apple'),
	(3, 'Boeing', 'GM', ''),
	(4, 'IBM', '', ''),
	(5, 'Apple', 'IBM', '');
	

	
	