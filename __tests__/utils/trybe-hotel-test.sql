DROP DATABASE IF EXISTS trybe_hotel;
CREATE DATABASE IF NOT EXISTS trybe_hotel;
USE trybe_hotel;

CREATE TABLE users(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(60),
  age INTEGER,
  created_at DATE,
  phone_number VARCHAR(11)
);
INSERT INTO users(first_name, last_name, email, age, created_at)
VALUES ('Terry', 'Medhurst', 'atuny0@email.com', 31, '2022-12-31'),
('Miles', 'Hills', 'rshawe2@dotmail.com', 17, '2023-05-10'),
('Sheldon', 'Hills', 'num41@email.com', 18, '2022-12-25'),
('Mavis', 'Abbott', 'kmeus4@email.com', 60, '2022-12-31'),
('Oleta', 'Schultz', 'dpettegre6@email.com', 29, '2023-09-25'),
('Ewell', 'Mueller', 'ggude7@dotmail.com', 15, '2022-12-31'),
('Demetrius', 'Corkery', 'nloiterton8@email.com', 31, '2023-08-03');

