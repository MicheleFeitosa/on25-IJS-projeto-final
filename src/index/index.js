class Alimento {
    constructor(nome, dataValidade) {
      this.nome = nome;
      this.dataValidade = dataValidade;
    }
  }
  
  class Despensa {
    constructor() {
      this.itens = [];
    }
  
    adicionarAlimento(alimento) {
      this.itens.push(alimento);
    }
  
    verificarValidade() {
      // Implemente a lógica para verificar a validade dos alimentos
    }
  }
  
  class Usuario {
    constructor(nome) {
      this.nome = nome;
      this.despensa = new Despensa();
    }
  
    adicionarAlimentoNaDespensa(alimento) {
      this.despensa.adicionarAlimento(alimento);
    }
  
    verificarAlimentosVencidos() {
      return this.despensa.verificarValidade();
    }
  }
  