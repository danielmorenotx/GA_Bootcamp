-- Basic Exercises
-- 1. Write a query to select all columns from both Customers and Orders where the CustomerID is the same in both tables.
SELECT *
FROM Customers AS c
JOIN Orders AS o
	ON c.customerid = o.customerid;


-- 2. Display the product name and the quantity ordered for each order.
SELECT
	name,
	quantity
FROM Products AS p
JOIN Orders AS o
	ON p.productid = o.productid;

-- 3. Join Three Tables: Combine Customers, Orders, and Products to list all orders with customer names and product names.
SELECT *
FROM Customers AS c
INNER JOIN Orders AS o
	ON c.customerid = o.customerid
JOIN Products AS p
	ON o.productid = p.productid;

-- 4. List all orders placed by customers named "John Doe".
SELECT *
FROM Customers AS c
JOIN Orders AS o
	ON c.customerid = o.customerid
WHERE
	name = 'John Doe';

-- 5. Show each customer's name and the total number of orders they've placed. Hint, This involves a join and aggregate function.
SELECT
	name,
	COUNT(*)
FROM Customers AS c
JOIN Orders AS o
	ON c.customerid = o.customerid
GROUP BY name;

-- 6. Display the customer name and the highest order amount (price) for each customer.
SELECT
	c.name AS customername,
	MAX(price)
FROM Customers AS c
INNER JOIN Orders AS o
	ON c.customerid = o.customerid
JOIN Products AS p
	ON o.productid = p.productid
GROUP BY c.name;

-- 7. List all orders for products priced over $500. Hint, This requires a join and a condition on the joined table.
SELECT
	*
FROM Products AS p
JOIN Orders AS o
	ON p.productid = o.productid
WHERE
	price > 500;

-- 8. Count how many products in each category have been ordered. Hint, Use a join between Products and Orders and group the results by category.
SELECT
	category,
	COUNT(*)
FROM Products AS p
JOIN Orders AS o
	ON p.productid = o.productid
GROUP BY category;

-- 9. Show all products that were ordered in December 2023, including the order date and quantity.
SELECT
	name,
	orderdate,
	quantity
FROM Products AS p
JOIN Orders AS o
	ON p.productid = o.productid
WHERE
	EXTRACT(YEAR FROM orderdate) = 2023 AND
	EXTRACT(MONTH FROM orderdate) = 12;

-- Advanced Exercises with Other Join Types, NOT BONUS
-- Read the difference between Join (Inner Join) and other join types listed below. 
-- If you understand the join concept these are easy to understand.
-- LEFT JOIN Exercise: List all customers and any orders they might have placed.
-- Use a LEFT JOIN to include customers who have not placed any orders.
SELECT *
FROM Customers AS c
LEFT JOIN Orders AS o
	ON c.customerid = o.customerid;

-- RIGHT JOIN Exercise: List all orders and the corresponding customer names.
-- If an order does not have a corresponding customer, it should still appear in the list.
SELECT *
FROM Orders AS o
RIGHT JOIN Customers AS c
	ON o.customerid = c.customerid;

-- FULL JOIN Exercise: Create a query that uses a FULL JOIN to list all customers and all orders.
-- If there are customers without orders or orders without customers, they should still appear in the output.
SELECT *
FROM Customers AS c
FULL JOIN Orders AS o
	ON c.customerid = o.customerid;

-- SELF JOIN Exercise: Write a query to find pairs of customers who share the same email domain.
-- For example, customers with "user@example.com" and "admin@example.com" should be paired. This will involve a SELF JOIN.
SELECT
	c1.name,
	c1.email,
	c2.name,
	c2.email
FROM customers AS c1
JOIN customers AS c2
	ON 
		c1.email <> c2.email AND 
		substring(c1.email FROM '@(.*)$') = substring(c2.email FROM '@(.*)$');
		
-- Find all customers who have not placed an order. This requires a specific type of join that excludes matching rows from one table.
SELECT *
FROM Customers AS c
LEFT JOIN Orders AS o
	ON c.customerid = o.customerid
WHERE o.customerid IS NULL;