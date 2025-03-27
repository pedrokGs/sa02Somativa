let textResultado = document.getElementById('resultado');
let escolhaComputer = document.getElementById('escolhaComputer');
let escolhaUser = document.getElementById('escolhaUser');

function randomChoice() {
  let escolhas = ["Pedra", "Papel", "Tesoura"];
  const escolha = Math.floor(Math.random() * escolhas.length);
  return escolhas[escolha];
}

function checkClash(c1, c2) {
  if (c1 === c2) {
    return "empate";
  }

  if (
    (c1 === "Tesoura" && c2 === "Papel") ||
    (c1 === "Papel" && c2 === "Pedra") ||
    (c1 === "Pedra" && c2 === "Tesoura")
  ) {
    return "vitoria";
  } else {
    return "derrota";
    
  }
}

function gameStart(c1) {
  let c2 = randomChoice();
  
  console.log("Você escolheu: " + c1);
  console.log("O computador escolheu: " + c2);
  let resultado = checkClash(c1,c2);
  console.log("Resultado: " + resultado);


  updateImage('escolhaComputer', `../assets/img/${c2}.png`);
  updateImage('escolhaUser', `../assets/img/${c1}.png`);
  //escolhaComputer.src = "../assets/img/" + c2 + ".png";
  //escolhaUser.src = "../assets/img/" + c1 + ".png";

  if (resultado === 'vitoria')
    textResultado.innerHTML = `${c1} ganha de ${c2}! <br> Você venceu!`;
  else if (resultado === 'empate')
    textResultado.innerHTML = `${c1} empata com ${c2}! <br> Empate!`;
  else
    textResultado.innerHTML = `${c1} perde para ${c2}! <br> Você perdeu!`;




}

function updateImage(containerId, newImageSrc) {
  const imgElement = document.getElementById(containerId);

  imgElement.classList.add('hidden');


  setTimeout(() => {
    imgElement.src = newImageSrc;
    imgElement.classList.remove('hidden');
  }, 500);
}