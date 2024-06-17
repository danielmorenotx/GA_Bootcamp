
# SQL Exercise: Understanding Joins

Joins are a fundamental concept in SQL that allow you to combine rows from two or more tables based on a related column between them.

## Initial Setup

- Inside your week 8 folder, create a day folder for today. 
- For each question highlight the question number as such `-- Question 1` and write your queries below. Save you sql inside the todays folder and push it to github.

Example
```
 -- Question 1
INSERT INTO ....
```

### Create a database 

####  Note, we are using the same database structure from yesterday. But since we have deleted some records let us create a new database called `AdvancedEcommerce`

### Create Tables

1. **Create a table named `Customers` with the following columns:**
   - `CustomerID` (primary key, integer, auto-increment)
   - `Name` (varchar, 255)
   - `Email` (varchar, 255)
   - `RegistrationDate` (date)

2. **Create a table named `Products` with the following columns:**
   - `ProductID` (primary key, integer, auto-increment)
   - `Name` (varchar, 255)
   - `Price` (decimal, 5,2) Note: Investigate what decimal is
   - `Category` (varchar, 100)
   - `Stock` (integer)

3. **Create a table named `Orders` with the following columns:**
   - `OrderID` (primary key, integer, auto-increment)
   - `CustomerID` (integer, foreign key referencing `Customers`)
   - `ProductID` (integer, foreign key referencing `Products`)
   - `OrderDate` (date)
   - `Quantity` (integer)

### Insert Data

Insert the following entries into each table.

#### Customers

```sql
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
```

#### Products

```sql
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

```

#### Orders

```sql
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

```

## Joins (Inner Joins) 

> Note: JOIN and INNER JOIN are the same

### Basic Exercises

1. Write a query to select all columns from both `Customers` and `Orders` where the `CustomerID` is the same in both tables.

2. Display the product name and the quantity ordered for each order. 
<!-- This requires a join between `Products` and `Orders`. -->

3. **Join Three Tables**: Combine `Customers`, `Orders`, and `Products` to list all orders with customer names and product names.

4. List all orders placed by customers named "John Doe".

5. Show each customer's name and the total number of orders they've placed. Hint, This involves a join and aggregate function.

6. Display the customer name and the highest order amount (price) for each customer. 

7. List all orders for products priced over $500. Hint, This requires a join and a condition on the joined table.

8. Count how many products in each category have been ordered. Hint, Use a join between `Products` and `Orders` and group the results by category.

9. Show all products that were ordered in December 2023, including the order date and quantity.

###  Advanced Exercises with Other Join Types, NOT BONUS

#### Read the difference between Join (Inner Join) and other join types listed below. If you understand the join concept these are easy to understand. [Here is a recommended resource](https://www.geeksforgeeks.org/sql-join-set-1-inner-left-right-and-full-joins/)

1. **LEFT JOIN Exercise**: List all customers and any orders they might have placed. Use a LEFT JOIN to include customers who have not placed any orders.

2. **RIGHT JOIN Exercise**: List all orders and the corresponding customer names. If an order does not have a corresponding customer, it should still appear in the list.

3. **FULL JOIN Exercise**: Create a query that uses a FULL JOIN to list all customers and all orders. If there are customers without orders or orders without customers, they should still appear in the output.

4. **SELF JOIN Exercise**: Write a query to find pairs of customers who share the same email domain. For example, customers with "user@example.com" and "admin@example.com" should be paired. This will involve a SELF JOIN.

5. Find all customers who have not placed an order. This requires a specific type of join that excludes matching rows from one table.

Happy querying!