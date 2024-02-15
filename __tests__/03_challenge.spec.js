const connection = require('./utils/connection');
const { runSchema, runQuery } = require('./utils/executeQuery');

describe('03 - Escreva uma query que retorna todas as colunas da junção entre as tabelas `hotels` e `rooms`', function () {
  it('Deve retornar os dados corretos', async function () {
    await runSchema();
    await runQuery('../../src/01_challenge.sql');
    await runQuery('../../src/02_challenge.sql');
    const [result] =  await runQuery('../../src/03_challenge.sql');
    expect(result).toStrictEqual([
      { 'available': 0, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 1, 'name': 'Brown, Kihn and Bergnaum', 'price': 120.35, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 0, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 3, 'name': 'Brown, Kihn and Bergnaum', 'price': 329.99, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 0, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 5, 'name': 'Brown, Kihn and Bergnaum', 'price': 929.99, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 1, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 10, 'name': 'Brown, Kihn and Bergnaum', 'price': 99.99, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 1, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 14, 'name': 'Brown, Kihn and Bergnaum', 'price': 739.99, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 1, 'city': 'Christiansenhaven', 'district': 'South', 'hotel_id': 1, 'id': 15, 'name': 'Brown, Kihn and Bergnaum', 'price': 829.99, 'star': 1, 'state': 'Ohio', 'street': 'Myrna Ports 188', 'zip_code': '61749464' },
      { 'available': 1, 'city': 'Abbottshire', 'district': 'Lake', 'hotel_id': 2, 'id': 2, 'name': 'Dickinson, Mayer and Boyer', 'price': 200.00, 'star': 3, 'state': 'NorthDakota', 'street': 'Tommie Street 781', 'zip_code': '79345910' },
      { 'available': 1, 'city': 'Abbottshire', 'district': 'Lake', 'hotel_id': 2, 'id': 6, 'name': 'Dickinson, Mayer and Boyer', 'price': 201.62, 'star': 3, 'state': 'NorthDakota', 'street': 'Tommie Street 781', 'zip_code': '79345910' },
      { 'available': 1, 'city': 'Abbottshire', 'district': 'Lake', 'hotel_id': 2, 'id': 11, 'name': 'Dickinson, Mayer and Boyer', 'price': 199.99, 'star': 3, 'state': 'NorthDakota', 'street': 'Tommie Street 781', 'zip_code': '79345910' },
      { 'available': 1, 'city': 'Abbottshire', 'district': 'Lake', 'hotel_id': 2, 'id': 12, 'name': 'Dickinson, Mayer and Boyer', 'price': 399.99, 'star': 3, 'state': 'NorthDakota', 'street': 'Tommie Street 781', 'zip_code': '79345910' },
      { 'available': 1, 'city': 'Pollichborough', 'district': 'Port', 'hotel_id': 3, 'id': 7, 'name': 'Hettinger-Raynor', 'price': 699.99, 'star': 3, 'state': 'Wyoming', 'street': 'Emerson Square 494', 'zip_code': '29551210' },
      { 'available': 1, 'city': 'Pollichborough', 'district': 'Port', 'hotel_id': 3, 'id': 9, 'name': 'Hettinger-Raynor', 'price': 150.05, 'star': 3, 'state': 'Wyoming', 'street': 'Emerson Square 494', 'zip_code': '29551210' },
      { 'available': 1, 'city': 'Kodymouth', 'district': 'East', 'hotel_id': 4, 'id': 4, 'name': 'Ernser Inc', 'price': 379.99, 'star': 4, 'state': 'Nebraska', 'street': 'Bart Knolls 161', 'zip_code': '16541278' },
      { 'available': 1, 'city': 'Kodymouth', 'district': 'East', 'hotel_id': 4, 'id': 8, 'name': 'Ernser Inc', 'price': 500.00, 'star': 4, 'state': 'Nebraska', 'street': 'Bart Knolls 161', 'zip_code': '16541278' },
      { 'available': 1, 'city': 'Kodymouth', 'district': 'East', 'hotel_id': 4, 'id': 13, 'name': 'Ernser Inc', 'price': 118.01, 'star': 4, 'state': 'Nebraska', 'street': 'Bart Knolls 161', 'zip_code': '16541278' },
    ]);
  });
});
    