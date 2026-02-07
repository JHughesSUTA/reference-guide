# SQL BOLT SOLUTIONS

## Lesson 9

### 1. List all movies and their combined sales in millions of dollars

```SQL
SELECT title, (domestic_sales + international_sales) / 1000000 AS 
  gross_sales_millions
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;
```

### 2. List all movies and their ratings in percent

```SQL
SELECT title, rating * 10 AS rating_percent
FROM movies
  JOIN boxoffice
    ON movies.id = boxoffice.movie_id;
```

### 3. List all movies that were released on even number years

```SQL
SELECT title, year
FROM movies
WHERE year % 2 = 0;
```

## Lesson 10

### 1. Find the longest time that an employee has been at the studio

```SQL
SELECT MAX(years_employed) as Max_years_employed
FROM employees;
```
### 2. For each role, find the average number of years employed by employees in that role

```SQL
SELECT role, AVG(years_employed) as Average_years_employed
FROM employees
GROUP BY role;
```
### 3. Find the total number of employee years worked in each building

```SQL
SELECT building, SUM(years_employed) as Total_years_employed
FROM employees
GROUP BY building;
```

## Lesson 11

### 1. Find the longest time that an employee has been at the studio

```SQL
SELECT role, COUNT(*) as Number_of_artists
FROM employees
WHERE role = "Artist";
```

### 2. For each role, find the average number of years employed by employees in that role

```SQL
SELECT role, COUNT(*)
FROM employees
GROUP BY role;
```

### 3. Find the total number of employee years worked in each building

```SQL
SELECT role, SUM(years_employed)
FROM employees
GROUP BY role
HAVING role = "Engineer";
```

## Lesson 12

### 1. Find the number of movies each director has directed

```SQL
SELECT director, COUNT(id) as Num_movies_directed
FROM movies
GROUP BY director;
```

### 1. Find the total domestic and international sales that can be attributed to each director

```SQL
SELECT director, SUM(domestic_sales + international_sales) as Cumulative_sales_from_all_movies
FROM movies
    INNER JOIN boxoffice
        ON movies.id = boxoffice.movie_id
GROUP BY director;
```
