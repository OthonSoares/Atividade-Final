const desafios = ["Dragão", "Troll", "Bandido"];

function enfrentarDesafios(cavaleiro) {
  for (let desafio of desafios) {
    console.log(`${cavaleiro.nome} enfrenta um ${desafio}!`);
  }
}

module.exports = { enfrentarDesafios };
