import Despensa from './despensa.js';

class Usuario {
    constructor(nome, numeroId) {
      this.nome = nome;
      this.numeroId = numeroId;
      this.despensa = new Despensa();
    }
  
    adicionarAlimentoNaDespensa(alimento) {
      this.despensa.adicionarAlimento(alimento);
    }
  
    verificarAlimentosPertoDeVencer() {
      return this.despensa.verificarValidade();
      
    }
  }

  
  export default Usuario;