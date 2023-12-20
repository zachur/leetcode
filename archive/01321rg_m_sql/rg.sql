SELECT c.visited_on,
       (SELECT SUM(amount) FROM Customer WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on) AS amount,
       ROUND((SELECT SUM(amount) FROM Customer WHERE visited_on BETWEEN DATE_SUB(c.visited_on, INTERVAL 6 DAY) AND c.visited_on) / 7, 2) AS average_amount
FROM Customer c
WHERE c.visited_on >= DATE_ADD((SELECT MIN(visited_on) FROM Customer), INTERVAL 6 DAY)
GROUP BY c.visited_on
ORDER BY c.visited_on;
