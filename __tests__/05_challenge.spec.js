const { runSchema, runQuery } = require('./utils/executeQuery');

describe('05 - Escreva uma query que retorna o hotel, rua, bairro e cidade de todos quartos dos hotéis disponíveis', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/05_challenge.sql');
    expect(result).toStrictEqual([
      { 'Bairro': 'South', 'Cidade': 'Christiansenhaven', 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Cidade': 'Christiansenhaven', 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'South', 'Cidade': 'Christiansenhaven', 'Hotel': 'Brown, Kihn and Bergnaum', 'Rua': 'Myrna Ports 188' },
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Port', 'Cidade': 'Pollichborough', 'Hotel': 'Hettinger-Raynor', 'Rua': 'Emerson Square 494' },
      { 'Bairro': 'Port', 'Cidade': 'Pollichborough', 'Hotel': 'Hettinger-Raynor', 'Rua': 'Emerson Square 494' },
      { 'Bairro': 'East', 'Cidade': 'Kodymouth', 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
      { 'Bairro': 'East', 'Cidade': 'Kodymouth', 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
      { 'Bairro': 'East', 'Cidade': 'Kodymouth', 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
    ]);
  });
});
    