# SQL BOLT SOLUTIONS

## Lesson 1

### 1. Find the title of each film

```SQL
SELECT title FROM movies;
```

### 2. Find the director of each film

```SQL
SELECT director FROM movies;
```

### 3. Find the title and director of each film

```SQL
SELECT title, director FROM movies;
```

### 4. Find the title and year of each film

```SQL
SELECT title, year FROM movies;
```

### 5. Find all the information about each film

```SQL
SELECT * FROM movies;
```

## Lesson 2

### 1. Find the movie with a row id of 6

```SQL
SELECT id, title FROM movies
WHERE id = 6;
```

### 2. Find the movies released in the years between 2000 and 2010

```SQL
SELECT title, year FROM movies
WHERE year BETWEEN 2000 AND 2010;
```

### 3. Find the movies not released in the years between 2000 and 2010 (use less/greater than)

```SQL
SELECT title, year FROM movies
WHERE year < 2000 OR year > 2010;
```

### 4. Find the first 5 Pixar movies and their release year (by date)

```SQL
SELECT title, year FROM movies
WHERE year <= 2003;
```

## Lesson 3

### 1. Find all the Toy Story movies

```SQL
SELECT title, director FROM movies
WHERE title LIKE "Toy Story%";
```

### 2. Find all the movies directed by John Lasseter

```SQL
SELECT title, director FROM movies
WHERE director = "John Lasseter";
```

### 3. Find all the movies (and director) not directed by John Lasseter

```SQL
SELECT title, director FROM movies
WHERE director != "John Lasseter";
```

### 4. Find all the WALL-\* movies

```SQL
SELECT * FROM movies
WHERE title LIKE "WALL-_";
```

## Lesson 4

### 1. List all directors of Pixar movies (alphabetically), without duplicates

```SQL
SELECT DISTINCT director FROM movies
ORDER BY director ASC;
```

### 2. List the last four Pixar movies released (ordered from most recent to least)

```SQL
SELECT title, year FROM movies
ORDER BY year DESC
LIMIT 4;
```

### 3. List the first five Pixar movies sorted alphabetically

```SQL
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5;
```

### 4. List the next five Pixar movies sorted alphabetically

```SQL
SELECT title FROM movies
ORDER BY title ASC
LIMIT 5 OFFSET 5;
```

## Lesson 5

### 1. List all the Canadian cities and their populations

```SQL
SELECT city, population FROM north_american_cities
WHERE country = "Canada";
```

### 2. Order all the cities in the United States by their latitude from north to south

```SQL
SELECT city, latitude FROM north_american_cities
WHERE country = "United States"
ORDER BY latitude DESC;
```

### 3. List all the cities west of Chicago, ordered from west to east

```SQL
SELECT city, longitude FROM north_american_cities
WHERE longitude < -87.629798
ORDER BY longitude ASC;
```

### 4. List the two largest cities in Mexico (by population)

```SQL
SELECT city, population FROM north_american_cities
WHERE country LIKE "Mexico"
ORDER BY population DESC
LIMIT 2;
```

### 5. List the third and fourth largest cities (by population) in the United States and their population

```SQL
SELECT city, population FROM north_american_cities
WHERE country LIKE "United States"
ORDER BY population DESC
LIMIT 2 OFFSET 2;
```

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

## Lesson 13

### 1. Add the studio's new production, Toy Story 4 to the list of movies (you can use any director)

```SQL
INSERT INTO movies VALUES (4, "Toy Story 4", "El Directore", 2015, 90);
```

### 2. Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.

```SQL
INSERT INTO boxoffice VALUES (4, 8.7, 340000000, 270000000);
```

## Lesson 14

### 1. The director for A Bug's Life is incorrect, it was actually directed by John Lasseter

```SQL
UPDATE movies
SET director = "John Lasseter"
WHERE id = 2;
```

### 2. The year that Toy Story 2 was released is incorrect, it was actually released in 1999

```SQL
UPDATE movies
SET year = 1999
WHERE id = 3;
```

### 3. Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich

```SQL
UPDATE movies
SET title = "Toy Story 3", director = "Lee Unkrich"
WHERE id = 11;
```

## Lesson 15

### 1.

```SQL
DELETE FROM movies
where year < 2005;
```

### 2.

```SQL
DELETE FROM movies
where director = "Andrew Stanton";
```

## Lesson 16

1.

```SQL
CREATE TABLE Database (
    Name TEXT,
    Version FLOAT,
    Download_count INTEGER
);
```

## Lesson 17

### 1. Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in.

```SQL
ALTER TABLE Movies
  ADD COLUMN Aspect_ratio FLOAT DEFAULT 2.39;
```

### 2. Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.

```SQL
ALTER TABLE Movies
  ADD COLUMN Language TEXT DEFAULT "English";
```

## Lesson 18

### 1. We've sadly reached the end of our lessons, lets clean up by removing the Movies table

```SQL
DROP TABLE Movies;
```

### 2. And drop the BoxOffice table as well

```SQL
DROP TABLE
```
