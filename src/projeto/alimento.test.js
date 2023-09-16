import Alimento from './alimento.js';

test('Criação de instância de Alimento', () => {
  const alimento = new Alimento('Arroz', 'Cereal', '2023-12-31');
  expect(alimento).toBeInstanceOf(Alimento);
  expect(alimento.nome).toBe('Arroz');
  expect(alimento.grupo).toBe('Cereal');
  expect(alimento.dataValidade).toBe('2023-12-31');
});

test('Verificação da data de validade', () => {
  const alimento = new Alimento('Banana', 'Fruta', '2022-09-15');
  expect(alimento.dataValidade).toBe('2022-09-15');
});

