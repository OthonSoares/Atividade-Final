class Personagem {
    constructor(nome, vida) {
      this.nome = nome; // Nome do personagem
      this.vida = vida; // Vida do personagem
    }
  
    // Método para saudar
    saudar() {
      return `Olá, eu sou ${this.nome}!`;
    }
  }
  
  class Cavaleiro extends Personagem {
    constructor(nome, vida, armadura) {
      super(nome, vida);
      this.armadura = armadura; // Armadura do cavaleiro
    }
  
    // Método de ataque do cavaleiro
    atacar() {
      return `${this.nome} ataca com sua espada!`;
    }
  }
  
  class Dragão extends Personagem {
    constructor(nome, vida, fogo) {
      super(nome, vida);
      this.fogo = fogo; // Habilidade de fogo do dragão
    }
  
    // Método de cuspir fogo
    cuspirFogo() {
      return `${this.nome} cospe fogo!`;
    }
  }
  
  module.exports = { Cavaleiro, Dragão };
  
        