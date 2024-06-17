-- Basic CRUD Operations
-- 1. Insert a new customer into the Customers table.
INSERT INTO Customers (Name, Email, RegistrationDate)
VALUES ('Alex Turner', 'alex.turner@mail.com', CURRENT_DATE);

-- 2. Retrieve all products within the 'Electronics' category.
SELECT * FROM PRODUCTS
WHERE category = 'Electronics';

-- 3. Update the stock for the 'Espresso Machine' in the Products table to reflect 35 units.
UPDATE Products
SET stock = 35
WHERE name = 'Espresso Machine';

SELECT * FROM Products
WHERE name = 'Espresso Machine';

-- 4. Delete a customer from the Customers table who has never placed an order.
DELETE FROM Customers
WHERE name = 'Alex Turner'

-- Intermediate Read Operations
-- 1. Select all orders placed in February 2023.
SELECT * FROM Orders
WHERE (EXTRACT(YEAR FROM orderdate) = 2023);

-- 2. Count the total number of customers registered before January 10, 2023.
SELECT COUNT(*) FROM Customers
WHERE
	registrationdate < '2023-01-10';
	
-- 3. List all products with a stock level between 50 and 100 units.
SELECT * FROM products
WHERE stock BETWEEN 50 AND 100;

-- 4. Find all customers with 'gmail.com' in their email address.
SELECT * FROM Customers
WHERE email like '%gmail.com';

-- 5. Count all customers with 'gmail.com' in their email address.
SELECT COUNT(*) FROM Customers
WHERE email like '%gmail.com';

-- Advanced Filtering and Aggregation
-- 1. List the categories of products that have less than 2 items in stock.
SELECT
	Category
FROM products
WHERE stock <= 2
GROUP BY Category;

-- 2. List the categories of products that have more than 5 items in stock.
SELECT
	Category
FROM products
WHERE stock >= 5
GROUP BY Category;

-- 3. Count the number of orders placed for each product ID, only for products with more than 2 orders.
SELECT COUNT(ProductID) FROM Orders
WHERE quantity > 2;

-- 4. Update the stock for all 'Books' category products by reducing the current stock by 5 units.
UPDATE Products
SET stock = (stock - 5)
WHERE category = 'Books';

-- 5. Delete all orders that were placed in February 2023 and had a quantity of 1.
DELETE FROM Orders
WHERE EXTRACT(YEAR FROM OrderDate) = 2023
AND EXTRACT(MONTH FROM OrderDate) = 2
AND Quantity = 1;

-- 6. Find the total number of products in each category that have a stock level greater than 20.
SELECT 
	Category,
	COUNT(*)
FROM Products
WHERE stock > 30
GROUP BY Category;

-- 7. BONUS Select the name and email of customers who have placed more than 1 order.
-- (If you are inverstigating on this on the internet Assume a simple approach without using joins (we have not covered those).)
SELECT * FROM Customers
INNER JOIN Orders
	ON Customers.CustomerID = Orders.CustomerID
WHERE quantity > 1;
