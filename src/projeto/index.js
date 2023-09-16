import Alimento from './alimento.js';
import Despensa from './despensa.js';
import Usuario from './usuario.js';

// roteiro do projeto 

// cadastrar um alimento
const banana = new Alimento("Banana", "Frutas", new Date(2023, 12, 11));
const leite = new Alimento("Leite", "Laticínios", new Date(2023, 11, 8));
const pao = new Alimento("Pão", "Cereais", new Date(2023, 8, 10));
const iogurte = new Alimento("iogurte", "laticínios", new Date(2023, 10, 21))

// Criando um usuário
const michele = new Usuario("Michele", 12345);

// Adicionando alimentos à despensa do usuário
michele.adicionarAlimentoNaDespensa(banana);
michele.adicionarAlimentoNaDespensa(leite);
michele.adicionarAlimentoNaDespensa(pao);
michele.adicionarAlimentoNaDespensa(iogurte);

// Verificando alimentos 

const alimentosPertoDeVencer = michele.verificarAlimentosPertoDeVencer();

alimentosPertoDeVencer.forEach(alimento => {
  console.log(`Nome: ${alimento.nome}, Grupo: ${alimento.grupo}, Data de Validade: ${alimento.dataValidade.toLocaleDateString()}, Mensagem: ${alimento.mensagem}`);
});

