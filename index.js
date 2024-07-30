const express = require('express');
const app = express();
const port = 3000;

const { Cavaleiro, Dragão } = require('./personagem');
const { iniciarJogo, finalizarJogo } = require('./funcoes');
const { enfrentarDesafios } = require('./laços');
const { tomarDecisao } = require('./decisoes');

// Inicia o jogo
iniciarJogo();

// Cria os personagens
const cavaleiro = new Cavaleiro('Arthur', 100, 'Armadura de Ouro');
const dragao = new Dragão('Smaug', 150, 'Fogo');

// Rotas
app.get('/', (req, res) => {
  res.send(`${cavaleiro.saudar()} Bem-vindo ao jogo interativo!`);
});

app.get('/atacar', (req, res) => {
  res.send(cavaleiro.atacar());
});

app.get('/enfrentar-desafios', (req, res) => {
  enfrentarDesafios(cavaleiro);
  res.send('Desafios enfrentados! Verifique o console.');
});

app.get('/decisao/:escolha', (req, res) => {
  const escolha = req.params.escolha;
  res.send(tomarDecisao(escolha));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Finaliza o jogo
process.on('SIGINT', () => {
  finalizarJogo();
  process.exit();
});
