-- Criação da tabela `rooms` isso me ajuda a lembrar por isso estou comentando bastante.
CREATE TABLE rooms (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Coluna `id` é uma chave primária auto incrementada
    price FLOAT(6, 2) NOT NULL, -- Coluna `price` é do tipo FLOAT com 6 dígitos no total e 2 casas decimais, não pode ser nula
    available BOOLEAN DEFAULT TRUE, -- Coluna `available` é do tipo BOOLEAN e seu valor padrão é TRUE
    hotel_id INT NOT NULL, -- Coluna `hotel_id` é uma chave estrangeira que faz referência à tabela `hotels`, não pode ser nula
    FOREIGN KEY (hotel_id) REFERENCES hotels(id) -- Restrição de chave estrangeira que vincula a coluna `hotel_id` à coluna `id` da tabela `hotels`
);

-- Inserção de dados na tabela `rooms`
INSERT INTO rooms (price, available, hotel_id) VALUES
(120.35, 0, 1), -- Preço: 120.35, Disponível: 0 (False), hotel_id: 1
(200.00, 1, 2), -- Preço: 200.00, Disponível: 1 (True), hotel_id: 2
(329.99, 0, 1), -- Preço: 329.99, Disponível: 0 (False), hotel_id: 1
(379.99, 1, 4), -- Preço: 379.99, Disponível: 1 (True), hotel_id: 4
(929.99, 0, 1), -- Preço: 929.99, Disponível: 0 (False), hotel_id: 1
(201.62, 1, 2), -- Preço: 201.62, Disponível: 1 (True), hotel_id: 2
(699.99, 1, 3), -- Preço: 699.99, Disponível: 1 (True), hotel_id: 3
(500.00, 1, 4), -- Preço: 500.00, Disponível: 1 (True), hotel_id: 4
(150.05, 1, 3), -- Preço: 150.05, Disponível: 1 (True), hotel_id: 3
(99.99, 1, 1),  -- Preço: 99.99,  Disponível: 1 (True), hotel_id: 1
(199.99, 1, 2), -- Preço: 199.99, Disponível: 1 (True), hotel_id: 2
(399.99, 1, 2), -- Preço: 399.99, Disponível: 1 (True), hotel_id: 2
(118.01, 1, 4), -- Preço: 118.01, Disponível: 1 (True), hotel_id: 4
(739.99, 1, 1), -- Preço: 739.99, Disponível: 1 (True), hotel_id: 1
(829.99, 1, 1); -- Preço: 829.99, Disponível: 1 (True), hotel_id: 1

-- Seleção de todos os dados da tabela `rooms`
SELECT * FROM rooms;
