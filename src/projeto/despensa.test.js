import Despensa from './despensa.js';
import Alimento from './alimento.js';

describe('Despensa', () => {
  let despensa;

  beforeEach(() => {
    despensa = new Despensa();
  });

  test('deve adicionar um alimento à despensa', () => {
    const alimento = new Alimento('Maçã', new Date(2023, 8, 30));
    despensa.adicionarAlimento(alimento);
    expect(despensa.itens).toContain(alimento);
  });

  test('deve verificar alimentos perto de vencer', () => {
    const alimento1 = new Alimento('Banana', new Date(2023, 8, 15));
    const alimento2 = new Alimento('Leite', new Date(2023, 8, 20));
    const alimento3 = new Alimento('Pão', new Date(2023, 8, 25));

    despensa.adicionarAlimento(alimento1);
    despensa.adicionarAlimento(alimento2);
    despensa.adicionarAlimento(alimento3);

    jest.spyOn(Date, 'now').mockImplementation(() => new Date(2023, 8, 18));

    const alimentosPertoDeVencer = despensa.verificarValidade();

    expect(alimentosPertoDeVencer.length).toBe(2);
    expect(alimentosPertoDeVencer[0].alimento).toBe(alimento1);
    expect(alimentosPertoDeVencer[1].alimento).toBe(alimento2);
  });
});
