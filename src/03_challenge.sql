-- Escreva uma consulta que retorna todas as colunas da junção entre as tabelas `hotels` e `rooms`

-- Seleciona todas as colunas das tabelas hotels e rooms
SELECT hotels.*, rooms.*
-- Junta as tabelas hotels e rooms usando a chave de ligação hotels.id e rooms.hotel_id
FROM hotels
JOIN rooms ON hotels.id = rooms.hotel_id;
