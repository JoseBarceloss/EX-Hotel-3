const { runSchema, runQuery } = require('./utils/executeQuery');

describe('06 - Escreva uma query que retorna o hotel, estado, cidade, bairro e rua de todos quartos dos hotéis disponíveis, que tenham pelo menos três estrelas e preço de no máximo 200.00', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/06_challenge.sql');
    expect(result).toStrictEqual([
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Estado': 'NorthDakota', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Lake', 'Cidade': 'Abbottshire', 'Estado': 'NorthDakota', 'Hotel': 'Dickinson, Mayer and Boyer', 'Rua': 'Tommie Street 781' },
      { 'Bairro': 'Port', 'Cidade': 'Pollichborough', 'Estado': 'Wyoming', 'Hotel': 'Hettinger-Raynor', 'Rua': 'Emerson Square 494' },
      { 'Bairro': 'East', 'Cidade': 'Kodymouth', 'Estado': 'Nebraska', 'Hotel': 'Ernser Inc', 'Rua': 'Bart Knolls 161' },
    ]);
  });
});
    