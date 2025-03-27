function randomChoice() {
  let escolhas = ["pedra", "papel", "tesoura"];
  const escolha = Math.floor(Math.random() * escolhas.length);
  return escolhas[escolha];
}

function checkClash(c1, c2) {
  if (c1 === c2) {
    console.log("Empate!");
    return "Empate!";
  }

  if (
    (c1 === "tesoura" && c2 === "papel") ||
    (c1 === "papel" && c2 === "pedra") ||
    (c1 === "pedra " && c2 === "tesoura")
  ) {
    return "Vitória!";
  } else {
    return "Derrota!";
    
  }
}

function gameStart(c1) {
  c2 = randomChoice();
  
  console.log("Você escolheu: " + c1);
  console.log("O computador escolheu: " + c2);
  console.log("Resultado: " + checkClash(c1,c2));
}

gameStart('pedra');
gameStart('pedra');
gameStart('papel');
gameStart('tesoura');
gameStart('tesoura');
gameStart('papel');
gameStart('pedra');
gameStart('tesoura');