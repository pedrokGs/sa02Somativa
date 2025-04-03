let textResultado = document.getElementById('resultado');
let escolhaComputer = document.getElementById('escolhaComputer');
let escolhaUser = document.getElementById('escolhaUser');
let container = document.querySelector('.container');
let podeJogar = true;
let speedrunMode = false;
let speedrunInterval;

function randomChoice() {
  let escolhas = ["Pedra", "Papel", "Tesoura"];
  return escolhas[Math.floor(Math.random() * escolhas.length)];
}

function checkClash(c1, c2) {
  if (c1 === c2) return "empate";
  if (
    (c1 === "Tesoura" && c2 === "Papel") ||
    (c1 === "Papel" && c2 === "Pedra") ||
    (c1 === "Pedra" && c2 === "Tesoura")
  ) {
    return "vitoria";
  }
  return "derrota";
}

function startSpeedrunMode() {
  speedrunMode = true;
  podeJogar = true;
  let timeLeft = 3;
  
  textResultado.innerHTML = `Modo Speedrun: Você tem <span style='color: black;'>${timeLeft}</span> segundos para escolher!`;

  speedrunInterval = setInterval(() => {
    timeLeft--;
    let redIntensity = Math.min(255, 50 + (3 - timeLeft) * 80);
    let color = `rgb(${redIntensity}, 0, 0)`;
    
    textResultado.innerHTML = `Modo Speedrun: Você tem <span style='color: ${color};'>${timeLeft}</span> segundos para escolher!`;

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


function gameStart(c1) {
  if (!podeJogar) {
    textResultado.innerHTML = "Aguarde antes de jogar novamente!";
    return;
  }
  
  if (speedrunMode) {
    clearInterval(speedrunInterval);
  }

  podeJogar = false;
  let c2 = randomChoice();

  let resultado = checkClash(c1, c2);
  updateImage('escolhaComputer', `../assets/img/${c2}.png`);
  updateImage('escolhaUser', `../assets/img/${c1}.png`);

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
  setTimeout(() => {
    podeJogar = true;
    if (speedrunMode) {
      startSpeedrunMode();
    }
  }, 1000);
}

function updateImage(containerId, newImageSrc) {
  const imgElement = document.getElementById(containerId);
  imgElement.classList.add('hidden');
  setTimeout(() => {
    imgElement.src = newImageSrc;
    imgElement.classList.remove('hidden');
  }, 500);
}

function toggleSpeedrunMode() {
  if (speedrunMode) {
    speedrunMode = false;
    textResultado.innerHTML = "Modo Normal ativado.";
  } else {
    startSpeedrunMode();
  }
}

window.onload = function() {
  textResultado.innerHTML = "Escolha uma opção para começar o jogo!";
  if (window.location.pathname.includes("speedrun.html")) {
    startSpeedrunMode();
  }
};
