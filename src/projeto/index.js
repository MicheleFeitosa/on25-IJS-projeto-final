import Alimento from './alimento.js';
import Despensa from './despensa.js';
import Usuario from './usuario.js';

// roteiro do projeto 

// cadastrar um alimento
const banana = new Alimento("Banana", "Frutas", new Date(2023, 11, 11)); 
const leite = new Alimento("Leite", "Laticínios", new Date(2023, 10, 8)); 
const pao = new Alimento("Pão", "Cereais", new Date(2023, 7, 10)); 
const iogurte = new Alimento("iogurte", "Laticínios", new Date(2023, 9, 21)); 

// Criando um usuário
const michele = new Usuario("Michele", 12345);

// Adicionando alimentos à despensa do usuário
michele.adicionarAlimentoNaDespensa(banana);
michele.adicionarAlimentoNaDespensa(leite);
michele.adicionarAlimentoNaDespensa(pao);
michele.adicionarAlimentoNaDespensa(iogurte);

// Verificando alimentos 

const alimentosPertoDeVencer = michele.verificarAlimentosPertoDeVencer();

alimentosPertoDeVencer.forEach(({ alimento, mensagem }) => {
    console.log(`Nome: ${alimento.nome}, Grupo: ${alimento.grupo}, Data de Validade: ${alimento.dataValidade.toLocaleDateString()}, Mensagem: ${mensagem}`);
  });

  console.log(alimentosPertoDeVencer)