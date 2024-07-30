function tomarDecisao(decisao) {
    if (decisao === "direita") {
      return "Você encontrou um tesouro!";
    } else if (decisao === "esquerda") {
      return "Você encontrou um monstro!";
    } else {
      return "Decisão inválida!";
    }
  }
  
  module.exports = { tomarDecisao };
  