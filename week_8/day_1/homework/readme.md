
# SQL Exercise: E-commerce Database Management

Welcome to your SQL practice exercise! This is designed for you to explore a slightly more complex scenario. You will work with a simple e-commerce database consisting of three tables: `Customers`, `Products`, and `Orders`.

## Initial Setup

- Inside your week 8 folder, create a day folder for today. 
- For each question highlight the question number as such `-- Question 1` and write your queries below. Save you sql inside the todays folder and push it to github.

Example
```
 -- Question 1
INSERT INTO ....


```

- First, let's create the tables needed for our e-commerce application.
### Create a database
First create a database name `Ecommerce`


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
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (1, 'John Doe', 'john.doe@gmail.com', '2023-01-01');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (2, 'Jane Smith', 'jane.smith@gmail.com', '2023-01-02');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (3, 'Michael Johnson', 'michael.johnson@gmail.com', '2023-01-03');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (4, 'Emily Davis', 'emily.davis@gmail.com', '2023-01-04');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (5, 'Chris Brown', 'chris.brown@gmail.com', '2023-01-05');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (6, 'Patricia Miller', 'patricia.miller@gmail.com', '2023-01-06');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (7, 'David Wilson', 'david.wilson@example.com', '2023-01-07');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (8, 'Linda Martinez', 'linda.martinez@example.com', '2023-01-08');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (9, 'Robert Anderson', 'robert.anderson@example.com', '2023-01-09');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (10, 'Maria Hernandez', 'maria.hernandez@gmail.com', '2023-01-10');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (11, 'James Thomas', 'james.thomas@gmail.com', '2023-01-11');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (12, 'Jennifer Jackson', 'jennifer.jackson@gmail.com', '2023-01-12');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (13, 'William Garcia', 'william.garcia@gmail.com', '2023-01-13');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (14, 'Elizabeth Martinez', 'elizabeth.martinez@example.com', '2023-01-14');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (15, 'Barbara White', 'barbara.white@example.com', '2023-01-15');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (16, 'Richard Lee', 'richard.lee@yahoo.com', '2023-01-16');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (17, 'Susan Jones', 'susan.jones@yahoo.com', '2023-01-17');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (18, 'Joseph Taylor', 'joseph.taylor@yahoo.com', '2023-01-18');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (19, 'Charles Moore', 'charles.moore@yahoo.com', '2023-01-19');
INSERT INTO Customers (CustomerID, Name, Email, RegistrationDate) VALUES (20, 'Angela Wilson', 'angela.wilson@yahoo.com', '2023-01-20');
```

#### Products

```sql
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (1, 'Laptop', 999.99, 'Electronics', 50);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (2, 'Smartphone', 599.99, 'Electronics', 100);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (3, 'Headphones', 199.99, 'Electronics', 80);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (4, 'Espresso Machine', 249.99, 'Appliances', 40);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (5, 'Microwave Oven', 89.99, 'Appliances', 60);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (6, 'Blender', 49.99, 'Appliances', 75);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (7, 'Desk Chair', 129.99, 'Furniture', 50);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (8, 'Bookshelf', 79.99, 'Furniture', 40);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (9, 'Dining Table', 499.99, 'Furniture', 30);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (10, 'Sofa', 899.99, 'Furniture', 20);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (11, 'Running Shoes', 119.99, 'Sportswear', 60);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (12, 'Yoga Mat', 29.99, 'Sportswear', 90);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (13, 'Basketball', 59.99, 'Sportswear', 40);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (14, 'Tennis Racket', 89.99, 'Sportswear', 50);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (15, 'Golf Clubs', 259.99, 'Sportswear', 25);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (16, 'Fantasy Novel', 19.99, 'Books', 100);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (17, 'Science Fiction Novel', 24.99, 'Books', 100);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (18, 'History Book', 29.99, 'Books', 50);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (19, 'Cookbook', 34.99, 'Books', 50);
INSERT INTO Products (ProductID, Name, Price, Category, Stock) VALUES (20, 'Sketchbook', 9.99, 'Stationery', 120);

```

#### Orders

```sql
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (1, 1, 1, '2023-02-01', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (2, 2, 3, '2023-02-02', 2);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (3, 3, 2, '2023-02-03', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (4, 4, 4, '2023-02-04', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (5, 5, 5, '2023-02-05', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (6, 6, 6, '2023-02-06', 2);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (7, 7, 7, '2023-02-07', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (8, 8, 8, '2023-02-08', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (9, 9, 9, '2023-02-09', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (10, 10, 10, '2023-02-10', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (11, 1, 11, '2023-02-11', 2);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (12, 2, 12, '2023-02-12', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (13, 3, 13, '2023-02-13', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (14, 4, 14, '2023-02-14', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (15, 5, 15, '2023-02-15', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (16, 6, 16, '2023-02-16', 2);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (17, 7, 17, '2023-02-17', 2);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (18, 8, 18, '2023-02-18', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (19, 9, 19, '2023-02-19', 1);
INSERT INTO Orders (OrderID, CustomerID, ProductID, OrderDate, Quantity) VALUES (20, 10, 20, '2023-02-20', 3);

```

## Tasks
### Basic CRUD Operations
1. Insert a new customer into the Customers table.

- Name: Alex Turner, Email: alex.turner@mail.com, Registration Date: Today's date.

2. Retrieve all products within the 'Electronics' category.

3. Update the stock for the 'Espresso Machine' in the Products table to reflect 35 units.

4. Delete a customer from the Customers table who has never placed an order. (Hint: You may choose any customer ID not present in the Orders table for this operation. Also learn about the DISTINCT keyword )

### Intermediate Read Operations
1. Select all orders placed in February 2023.

2. Count the total number of customers registered before January 10, 2023.

3. List all products with a stock level between 50 and 100 units.

4. Find all customers with 'gmail.com' in their email address.

5. Count all customers with 'gmail.com' in their email address.


### Advanced Filtering and Aggregation

1. List the categories of products that have less than 2 items in stock.

2. List the categories of products that have more than 5 items in stock.

3. Count the number of orders placed for each product ID, only for products with more than 2 orders.

4. Update the stock for all 'Books' category products by reducing the current stock by 5 units.

5. Delete all orders that were placed in February 2023 and had a quantity of 1.

6. Find the total number of products in each category that have a stock level greater than 20.

7. BONUS Select the name and email of customers who have placed more than 1 order. (If you are inverstigating on this on the internet Assume a simple approach without using joins (we have not covered those).)

Happy querying!