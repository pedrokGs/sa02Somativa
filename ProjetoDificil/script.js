// Definição de variáveis
let textResultado = document.getElementById('resultado');
let escolhaComputer = document.getElementById('escolhaComputer');
let escolhaUser = document.getElementById('escolhaUser');
let container = document.querySelector('.container');
let podeJogar = true;
let speedrunMode = false;
let speedrunInterval;

// Função para efetuar a jogada do computador
function randomChoice() {
  let escolhas = ["Pedra", "Papel", "Tesoura"];

  // Retorna 1 item aleatório de dentro da array escolhas
  return escolhas[Math.floor(Math.random() * escolhas.length)];
}

// Função para verificar o resultado do jogo
// Retorna "vitoria", "derrota" ou "empate"
function checkClash(c1, c2) {
  // Verifica se o jogador empatou antes de tudo
  if (c1 === c2) return "empate";

  // Verifica se o jogador ganhou
  if (
    (c1 === "Tesoura" && c2 === "Papel") ||
    (c1 === "Papel" && c2 === "Pedra") ||
    (c1 === "Pedra" && c2 === "Tesoura")
  ) {
    return "vitoria";
  }
  return "derrota";
}

// Função para o modo rápido
function startSpeedrunMode() {
  // Variáveis de controle
  speedrunMode = true;
  podeJogar = true;
  let timeLeft = 3;
  
  // DOM
  textResultado.innerHTML = `Modo Speedrun: Você tem <span style='color: black;'>${timeLeft}</span> segundos para escolher!`;

  // Função de cronometragem, muda o texto e a cor do texto a cada segundo
  // e verifica se o tempo esgotou  
  speedrunInterval = setInterval(() => {
    timeLeft--;
    let redIntensity = Math.min(255, 50 + (3 - timeLeft) * 80);
    let color = `rgb(${redIntensity}, 0, 0)`;
    
    textResultado.innerHTML = `Modo Speedrun: Você tem <span style='color: ${color};'>${timeLeft}</span> segundos para escolher!`;

    // Tempo expirado, manda o jogador de volta para o menu principal
    if (timeLeft <= 0) {
      clearInterval(speedrunInterval);
      podeJogar = false;
      textResultado.innerHTML = "<span style='color: red;'>Tempo esgotado! Você perdeu! Retornando ao menu principal...</span>";
      setTimeout(() => {
        window.location.href = "../index.html"; 
      }, 2000);
    }
  }, 1000);
}

// Função principal para início de jogo
function gameStart(c1) {
  // Variável de controle, para não permitir jogadas contínuas em menos de 1 segundo
  if (!podeJogar) {
    textResultado.innerHTML = "Aguarde antes de jogar novamente!";
    return;
  }
  
  // Verifica se o jogador está no modo speedrun, se sim, para o intervalo
  if (speedrunMode) {
    clearInterval(speedrunInterval);
  }

  podeJogar = false;

  // O computador escolhe uma opção aleatória
  let c2 = randomChoice();

  // Verifica o resultado da jogada
  let resultado = checkClash(c1, c2);

  // Atualiza a imagem do computador e do jogador
  updateImage('escolhaComputer', `../assets/img/${c2}.png`);
  updateImage('escolhaUser', `../assets/img/${c1}.png`);

  // Atualiza o texto do resultado e cor do fundo do container
  if (resultado === 'vitoria') {
    textResultado.innerHTML = `${c1} ganha de ${c2}! <br> Você venceu!`;
    container.style.backgroundColor = 'rgb(144, 238, 144)';
  } else if (resultado === 'empate') {
    textResultado.innerHTML = `${c1} empata com ${c2}! <br> Empate!`;
    container.style.backgroundColor = 'whitesmoke';
  } else {
    textResultado.innerHTML = `${c1} perde para ${c2}! <br> Você perdeu!`;
    container.style.backgroundColor = 'rgb(255, 204, 203)';
  }

  // Permite o jogador jogar após 1 segundo
  setTimeout(() => {
    podeJogar = true;
    if (speedrunMode) {
      startSpeedrunMode();
    }
  }, 1000);
}

// Função para atualizar a imagem do jogador e do computador
// com efeito de fade out e fade in
function updateImage(containerId, newImageSrc) {
  const imgElement = document.getElementById(containerId);
  imgElement.classList.add('hidden');
  setTimeout(() => {
    imgElement.src = newImageSrc;
    imgElement.classList.remove('hidden');
  }, 500);
}

// Função para ativar o modo speedrun
function toggleSpeedrunMode() {
  if (speedrunMode) {
    speedrunMode = false;
    textResultado.innerHTML = "Modo Normal ativado.";
  } else {
    startSpeedrunMode();
  }
}

// Carrega o modo speedrun assim que o usuário entra na página speedrun.html
window.onload = function() {
  textResultado.innerHTML = "Escolha uma opção para começar o jogo!";
  if (window.location.pathname.includes("speedrun.html")) {
    startSpeedrunMode();
  }
};
