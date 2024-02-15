const { runSchema, runQuery } = require('./utils/executeQuery');

describe('04 - Escreva uma query que retorna o hotel, rua, bairro, diária e disponibilidade de todos quartos dos hotéis', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/04_challenge.sql');
    expect(result).toStrictEqual([
      { 'Bairro': 'South', 'Disponível': 0, 'Diária': 120.35, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Disponível': 0, 'Diária': 329.99, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Disponível': 0, 'Diária': 929.99, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Disponível': 1, 'Diária': 99.99, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Disponível': 1, 'Diária': 739.99, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Disponível': 1, 'Diária': 829.99, 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'Lake', 'Disponível': 1, 'Diária': 200.00, 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Disponível': 1, 'Diária': 201.62, 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Disponível': 1, 'Diária': 199.99, 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Disponível': 1, 'Diária': 399.99, 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Port', 'Disponível': 1, 'Diária': 699.99, 'Hotel': 'Hettinger-Raynor', 'Rua': 'Emerson Square 494' },
      { 'Bairro': 'Port', 'Disponível': 1, 'Diária': 150.05, 'Hotel': 'Hettinger-Raynor', 'Rua': 'Emerson Square 494' },
      { 'Bairro': 'East', 'Disponível': 1, 'Diária': 379.99, 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
      { 'Bairro': 'East', 'Disponível': 1, 'Diária': 500.00, 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
      { 'Bairro': 'East', 'Disponível': 1, 'Diária': 118.01, 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
    ]);
  });
});
    