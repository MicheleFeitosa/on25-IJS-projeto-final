import Usuario from './usuario.js';

describe('Usuario', () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario('João', 123);
  });

  test('deve criar um novo usuário com nome e número de ID', () => {
    expect(usuario.nome).toBe('João');
    expect(usuario.numeroId).toBe(123);
  });

  test('deve adicionar um alimento na despensa', () => {
    usuario.adicionarAlimentoNaDespensa('Maçã');
    expect(usuario.despensa.alimentos).toContain('Maçã');
  });

  test('deve verificar alimentos perto de vencer', () => {
    usuario.adicionarAlimentoNaDespensa('Banana');
    usuario.adicionarAlimentoNaDespensa('Leite');
    usuario.adicionarAlimentoNaDespensa('Pão');

    jest.spyOn(Date, 'now').mockImplementation(() => new Date(2023, 8, 20));

    const alimentosPertoDeVencer = usuario.verificarAlimentosPertoDeVencer();
    expect(alimentosPertoDeVencer).toContain('Leite');
    expect(alimentosPertoDeVencer).toContain('Pão');
    expect(alimentosPertoDeVencer).not.toContain('Banana');
  });
});
