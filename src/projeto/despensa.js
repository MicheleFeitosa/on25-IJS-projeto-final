  class Despensa {
    constructor() {
      this.itens = [];
    }
  
    adicionarAlimento(alimento) {
      this.itens.push(alimento);
    }
  
    verificarValidade() {
      const dataAtual = new Date();
      const dataLimite = new Date(dataAtual);
      dataLimite.setMonth(dataLimite.getMonth() + 1);
    
      const alimentosPertoDeVencer = this.itens.filter(alimento => {
        const diasRestantes = Math.ceil((alimento.dataValidade - dataAtual) / (1000 * 60 * 60 * 24));
        return diasRestantes >= 1 && diasRestantes <= 7;
      });
    
      return alimentosPertoDeVencer.map(alimento => ({
        alimento,
        mensagem: `O alimento "${alimento.nome}" está perto de vencer em 
        ${Math.ceil((alimento.dataValidade - dataAtual) / (1000 * 60 * 60 * 24))} dias.`,
      }));
    }
  }      
  
  export default Despensa;
  
  
  