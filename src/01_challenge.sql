-- Criação da tabela hotels isso me ajuda a lembrar por isso estou comentando bastante porque eu venho e olho no portifolio para lembrar.
CREATE TABLE hotels (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Coluna para o ID, auto incremento e chave primária
    name VARCHAR(80) NOT NULL, -- Nome do hotel, não pode ser nulo
    zip_code VARCHAR(8) NOT NULL, -- CEP do hotel, não pode ser nulo
    city VARCHAR(80), -- Cidade do hotel
    state VARCHAR(80), -- Estado do hotel
    district VARCHAR(80), -- Distrito do hotel
    street VARCHAR(80), -- Rua do hotel
    star INT NOT NULL -- Classificação do hotel, não pode ser nulo
);

-- Inserção dos dados na tabela hotels
INSERT INTO hotels (name, zip_code, city, state, district, street, star) VALUES
('Brown, Kihn and Bergnaum', '61749464', 'Christiansenhaven', 'Ohio', 'South', 'Myrna Ports 188', 1), -- Hotel 1
('Dickinson, Mayer and Boyer', '79345910', 'Abbottshire', 'NorthDakota', 'Lake', 'Tommie Street 781', 3), -- Hotel 2
('Hettinger-Raynor', '29551210', 'Pollichborough', 'Wyoming', 'Port', 'Emerson Square 494', 3), -- Hotel 3
('Ernser Inc', '16541278', 'Kodymouth', 'Nebraska', 'East', 'Bart Knolls 161', 4); -- Hotel 4

-- Seleção de todos os dados da tabela hotels
SELECT * FROM hotels;
