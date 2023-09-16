import Alimento from './alimento.js'; 

  class Despensa {
    constructor() {
      this.itens = [];
    }
  
    adicionarAlimento(alimento) {
      this.itens.push(alimento);
    }
  
    verificarValidade() {
      const dataAtual = new Date();
      const dataLimite = new Date();
      dataLimite.setMonth(dataAtual.getMonth() + 1); // Adiciona 1 mês à data atual
  
      const alimentosPertoDeVencer = this.itens.filter(alimento => alimento.dataValidade > dataAtual && alimento.dataValidade <= dataLimite);
  
      return alimentosPertoDeVencer.map(alimento => {
        const diasRestantes = Math.ceil((alimento.dataValidade - dataAtual) / (1000 * 60 * 60 * 24));
        return {
          alimento,
          mensagem: `O alimento "${alimento.nome}" está perto de vencer em ${diasRestantes} dias.`
        };
      });
    }
  }
  
  export default Despensa;
  
  