SELECT h.name AS 'Hotel',
h.street AS 'Rua',
h.district AS 'Bairro',
h.city AS 'Cidade'
FROM hotels h 
JOIN rooms r ON h.id = r.hotel_id
WHERE r.available = 1;