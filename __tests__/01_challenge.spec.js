const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('01 - Crie e popule a tabela hotels de acordo com as verificações abaixo', function () {
  it('A tabela `hotels` deve ser criada', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW TABLES LIKE "hotels"');
    expect(result.length).toBe(1);
  });

  it('A tabela `hotels` deve ter a coluna `id` como chave primária, não nula e auto incrementável', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'id',
      Type: 'int',
      Null: 'NO',
      Key: 'PRI',
      Default: null,
      Extra: 'auto_increment'
    });
  });

  it('A tabela `hotels` deve ter a coluna `name` como varchar(80) não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'name',
      Type: 'varchar(80)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `zip_code` como varchar(80) não nula', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'zip_code',
      Type: 'varchar(8)',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `state` como varchar(80)', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'state',
      Type: 'varchar(80)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `city` como varchar(80)', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'city',
      Type: 'varchar(80)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `district` como varchar(80)', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'district',
      Type: 'varchar(80)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `street` como varchar(80)', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'street',
      Type: 'varchar(80)',
      Null: 'YES',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ter a coluna `star` com tipo inteiro numérico não nulo', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SHOW COLUMNS FROM hotels');
    expect(result).toContainEqual({
      Field: 'star',
      Type: 'int',
      Null: 'NO',
      Key: '',
      Default: null,
      Extra: ''
    });
  });

  it('A tabela `hotels` deve ser populada com os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    const [result] = await connection.query('SELECT * FROM hotels');
    expect(result).toStrictEqual([
      { 'id': 1, 'name': 'Brown, Kihn and Bergnaum', 'zip_code': '61749464', 'city': 'Christiansenhaven', 'state': 'Ohio', 'district': 'South', 'street': 'Myrna Ports 188', 'star': 1 },
      { 'id': 2, 'name': 'Dickinson, Mayer and Boyer', 'zip_code': '79345910', 'city': 'Abbottshire', 'state': 'NorthDakota', 'district': 'Lake', 'street': 'Tommie Street 781', 'star': 3 },
      { 'id': 3, 'name': 'Hettinger-Raynor', 'zip_code': '29551210', 'city': 'Pollichborough', 'state': 'Wyoming', 'district': 'Port', 'street': 'Emerson Square 494', 'star': 3 },
      { 'id': 4, 'name': 'Ernser Inc', 'zip_code': '16541278', 'city': 'Kodymouth', 'state': 'Nebraska', 'district': 'East', 'street': 'Bart Knolls 161', 'star': 4 },
    ]);
  });
});