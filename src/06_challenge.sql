SELECT h.name AS 'Hotel',
h.state AS 'Estado',
h.city AS 'Cidade',
h.district AS 'Bairro',
h.street AS 'Rua'
FROM hotels h
JOIN rooms r ON h.id = r.hotel_id
WHERE r.available = 1
AND h.star >= 3
AND r.price <= 200;