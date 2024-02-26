SELECT h.name AS 'Hotel',
h.street AS 'Rua',
h.district AS 'Bairro',
r.price AS 'Diária',
r.available AS 'Disponível'
FROM hotels h
JOIN rooms r ON h.id = r.hotel_id;