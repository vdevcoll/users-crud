CREATE DATABASE userscrud;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR(255)
);