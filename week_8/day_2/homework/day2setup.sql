-- Create Customers table
CREATE TABLE Customers (
    CustomerID SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    RegistrationDate DATE
);

-- Create Products table
CREATE TABLE Products (
    ProductID SERIAL PRIMARY KEY,
    Name VARCHAR(255),
    Price DECIMAL(5, 2),
    Category VARCHAR(100),
    Stock INT
);

-- Create Orders table
CREATE TABLE Orders (
    OrderID SERIAL PRIMARY KEY,
    CustomerID INT REFERENCES Customers(CustomerID),
    ProductID INT REFERENCES Products(ProductID),
    OrderDate DATE,
    Quantity INT
);

INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('John Doe', 'john.doe@gmail.com', '2023-01-01');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Jane Smith', 'jane.smith@gmail.com', '2023-01-02');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Michael Johnson', 'michael.johnson@gmail.com', '2023-01-03');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Emily Davis', 'emily.davis@gmail.com', '2023-01-04');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Chris Brown', 'chris.brown@gmail.com', '2023-01-05');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Patricia Miller', 'patricia.miller@gmail.com', '2023-01-06');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('David Wilson', 'david.wilson@example.com', '2023-01-07');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Linda Martinez', 'linda.martinez@example.com', '2023-01-08');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ('Robert Anderson', 'robert.anderson@example.com', '2023-01-09');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Maria Hernandez', 'maria.hernandez@gmail.com', '2023-01-10');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'James Thomas', 'james.thomas@gmail.com', '2023-01-11');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Jennifer Jackson', 'jennifer.jackson@gmail.com', '2023-01-12');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'William Garcia', 'william.garcia@gmail.com', '2023-01-13');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Elizabeth Martinez', 'elizabeth.martinez@example.com', '2023-01-14');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Barbara White', 'barbara.white@example.com', '2023-01-15');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Richard Lee', 'richard.lee@yahoo.com', '2023-01-16');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Susan Jones', 'susan.jones@yahoo.com', '2023-01-17');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Joseph Taylor', 'joseph.taylor@yahoo.com', '2023-01-18');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Charles Moore', 'charles.moore@yahoo.com', '2023-01-19');
INSERT INTO Customers (Name, Email, RegistrationDate) VALUES ( 'Angela Wilson', 'angela.wilson@yahoo.com', '2023-01-20');

INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Laptop', 999.99, 'Electronics', 50);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Smartphone', 599.99, 'Electronics', 100);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Headphones', 199.99, 'Electronics', 80);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Espresso Machine', 249.99, 'Appliances', 40);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Microwave Oven', 89.99, 'Appliances', 60);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Blender', 49.99, 'Appliances', 75);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Desk Chair', 129.99, 'Furniture', 50);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Bookshelf', 79.99, 'Furniture', 40);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ('Dining Table', 499.99, 'Furniture', 30);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Sofa', 899.99, 'Furniture', 20);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Running Shoes', 119.99, 'Sportswear', 60);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Yoga Mat', 29.99, 'Sportswear', 90);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Basketball', 59.99, 'Sportswear', 40);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Tennis Racket', 89.99, 'Sportswear', 50);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Golf Clubs', 259.99, 'Sportswear', 25);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Fantasy Novel', 19.99, 'Books', 100);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Science Fiction Novel', 24.99, 'Books', 100);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'History Book', 29.99, 'Books', 50);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Cookbook', 34.99, 'Books', 50);
INSERT INTO Products (Name, Price, Category, Stock) VALUES ( 'Sketchbook', 9.99, 'Stationery', 120);

INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (1, 1, '2023-02-01', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (2, 3, '2023-02-02', 2);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (3, 2, '2023-02-03', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (4, 4, '2023-02-04', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (5, 5, '2023-02-05', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (6, 6, '2023-02-06', 2);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (7, 7, '2023-02-07', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (8, 8, '2023-02-08', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES (9, 9, '2023-02-09', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 10, 10, '2023-02-10', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 1, 11, '2023-02-11', 2);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 2, 12, '2023-02-12', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 3, 13, '2023-02-13', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 4, 14, '2023-02-14', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 5, 15, '2023-02-15', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 6, 16, '2023-02-16', 2);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 7, 17, '2023-02-17', 2);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 8, 18, '2023-02-18', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 9, 19, '2023-02-19', 1);
INSERT INTO Orders (CustomerID, ProductID, OrderDate, Quantity) VALUES ( 10, 20, '2023-02-20', 3);