const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('02 - Crie e popule a tabela rooms de acordo com as verificações abaixo', function () {
  it('A tabela `rooms` deve ser criada', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "rooms"');
    expect(result.length).toBe(1);
  });

  it('A tabela `rooms` deve ter a coluna `id` como chave primária, não nula e auto incrementável', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM rooms');
    expect(result).toContainEqual({
      Field: 'id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: 'auto_increment'
    });
  });

  it('A tabela `rooms` deve ter a coluna `price` como FLOAT(6,2) não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM rooms');
    expect(result).toContainEqual({
        Field: 'price',
        Type: 'float(6,2)',
        Null: 'NO',
        Key: '',
        Default: null,
        Extra: ''
    });
  });

  it('A tabela `rooms` deve ter a coluna `available` booleana, não nula e que se inicia com true', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM rooms');
    expect(result).toContainEqual({
        Field: 'available',
        Type: 'tinyint(1)',
        Null: 'YES',
        Key: '',
        Default: '1',
        Extra: ''
    });
  });

  it('A tabela `rooms` deve ter a coluna `hotel_id` como chave estrangeira, não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM rooms');
    expect(result).toContainEqual({
      Field: 'hotel_id',
      Type: 'int',
      Null: 'NO',
      Key: 'MUL',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `rooms` deve ter a coluna `hotel_id` como chave estrangeira da tabela `hotels`', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [[result]] = await connection.query('SHOW CREATE TABLE rooms');
    expect(result['Create Table']).toContain('FOREIGN KEY (`hotel_id`) REFERENCES `hotels` (`id`)');
  });

  it('A tabela `rooms` deve ser populada com os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] = await connection.query('SELECT * FROM rooms');
    expect(result).toStrictEqual([
      { 'id': 1, 'price': 120.35, 'available': 0, 'hotel_id': 1 },
      { 'id': 2, 'price': 200.00, 'available': 1, 'hotel_id': 2 },
      { 'id': 3, 'price': 329.99, 'available': 0, 'hotel_id': 1 },
      { 'id': 4, 'price': 379.99, 'available': 1, 'hotel_id': 4 },
      { 'id': 5, 'price': 929.99, 'available': 0, 'hotel_id': 1 },
      { 'id': 6, 'price': 201.62, 'available': 1, 'hotel_id': 2 },
      { 'id': 7, 'price': 699.99, 'available': 1, 'hotel_id': 3 },
      { 'id': 8, 'price': 500.00, 'available': 1, 'hotel_id': 4 },
      { 'id': 9, 'price': 150.05, 'available': 1, 'hotel_id': 3 },
      { 'id': 10, 'price': 99.99, 'available': 1, 'hotel_id': 1 },
      { 'id': 11, 'price': 199.99, 'available': 1, 'hotel_id': 2 },
      { 'id': 12, 'price': 399.99, 'available': 1, 'hotel_id': 2 },
      { 'id': 13, 'price': 118.01, 'available': 1, 'hotel_id': 4 },
      { 'id': 14, 'price': 739.99, 'available': 1, 'hotel_id': 1 },
      { 'id': 15, 'price': 829.99, 'available': 1, 'hotel_id': 1 },
    ]);
  });
});