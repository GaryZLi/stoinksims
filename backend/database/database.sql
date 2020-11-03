CREATE DATABASE StoinkSims;

CREATE TABLE Users(
    uid varchar(28) PRIMARY KEY,
    firstName varchar(100) NOT NULL,
    lastName varchar(100) NOT NULL,
    portfolioValue decimal(10, 3)
);

CREATE TABLE Portfolio(
    uid SERIAL PRIMARY KEY,
    symbol VARCHAR(5),
    averagecost integer
);

DROP TABLE Users;