document.addEventListener("DOMContentLoaded", () => {
	const $tempoRestante = document.querySelector("#tiempoRestante"),
		$btnIniciar = document.querySelector("#btnIniciar"),
		$btnPausar = document.querySelector("#btnPausar"),
		$btnParar = document.querySelector("#btnDetener"),
		$horas = document.querySelector("#horas"),
		$minutos = document.querySelector("#minutos"),
		$segundos = document.querySelector("#segundos"),
		$containerInputs = document.querySelector("#contenedorInputs"),
		$mensagem = document.querySelector("#mensagem"); // Novo elemento para a mensagem de erro

	let idInterval = null, diferencaTemporal = 0, dataFutura = null;

	// Som
	const carregarSom = function (fonte) {
		const som = document.createElement("audio");
		som.src = fonte;
		som.loop = true;
		som.setAttribute("preload", "auto");
		som.setAttribute("controls", "none");
		som.style.display = "none"; // <-- oculto
		document.body.appendChild(som);
		return som;
	};

	const som = carregarSom("timer.wav");
	const ocultarElemento = elemento => {
		elemento.style.display = "none";
	}

	const mostrarElemento = elemento => {
		elemento.style.display = "";
	}

	const iniciarTemporizador = (horas, minutos, segundos) => {
		ocultarElemento($containerInputs);
		mostrarElemento($btnPausar);
		ocultarElemento($btnIniciar);
		ocultarElemento($btnParar);

		if (dataFutura) {
			dataFutura = new Date(new Date().getTime() + diferencaTemporal);
			diferencaTemporal = 0;
		} else {
			const milissegundos = (segundos + (minutos * 60) + (horas * 3600)) * 1000;
			dataFutura = new Date(new Date().getTime() + milissegundos);
		}

		clearInterval(idInterval);
		idInterval = setInterval(() => {
			const tempoRestante = dataFutura.getTime() - new Date().getTime();
			if (tempoRestante <= 0) {
				clearInterval(idInterval);
				som.play();
				ocultarElemento($btnPausar);
				mostrarElemento($btnParar);
			} else {
				$tempoRestante.textContent = milissegundosAHorasMinutosESegundos(tempoRestante);
			}
		}, 50);
	};

	const pausarTemporizador = () => {
		ocultarElemento($btnPausar);
		mostrarElemento($btnIniciar);
		mostrarElemento($btnParar);
		diferencaTemporal = dataFutura.getTime() - new Date().getTime();
		clearInterval(idInterval);
	};

	const pararTemporizador = () => {
		clearInterval(idInterval);
		dataFutura = null;
		diferencaTemporal = 0;
		som.currentTime = 0;
		som.pause();
		$tempoRestante.textContent = "00:00:00.0";
		init();
	};

	const adicionarZeroSeNecessario = valor => {
		if (valor < 10) {
			return "0" + valor;
		} else {
			return "" + valor;
		}
	}

	const milissegundosAHorasMinutosESegundos = (milissegundos) => {
		const horas = parseInt(milissegundos / 1000 / 3600);
		milissegundos -= horas * 3600 * 1000;
		const minutos = parseInt(milissegundos / 1000 / 60);
		milissegundos -= minutos * 60 * 1000;
		const segundos = (milissegundos / 1000).toFixed(1);
		return `${adicionarZeroSeNecessario(horas)}:${adicionarZeroSeNecessario(minutos)}:${adicionarZeroSeNecessario(segundos)}`;
	};

	const init = () => {
		$horas.value = "";
		$minutos.value = "";
		$segundos.value = "";
		mostrarElemento($containerInputs);
		mostrarElemento($btnIniciar);
		ocultarElemento($btnPausar);
		ocultarElemento($btnParar);
		$mensagem.textContent = ""; // Limpar mensagem
	};

	$btnIniciar.onclick = () => {
		const horas = $horas.value.trim();
		const minutos = $minutos.value.trim();
		const segundos = $segundos.value.trim();

		// Validação para campos vazios
		if (horas === "" || minutos === "" || segundos === "") {
			$mensagem.innerText = "Preencha todos os campos";
			$mensagem.style.color = "red";
			return; // Não continua a execução se houver campos vazios
		} else {
			$mensagem.innerText = "Deu certo";
			$mensagem.style.color = "green";
		}

		// Converter valores para inteiros e verificar se são válidos
		const horasInt = parseInt(horas);
		const minutosInt = parseInt(minutos);
		const segundosInt = parseInt(segundos);

		// Validação para valores inválidos ou zero
		if (isNaN(horasInt) || isNaN(minutosInt) || isNaN(segundosInt) || (segundosInt <= 0 && minutosInt <= 0 && horasInt <= 0)) {
			return;
		}

		iniciarTemporizador(horasInt, minutosInt, segundosInt);
	};

	init();
	$btnPausar.onclick = pausarTemporizador;
	$btnParar.onclick = pararTemporizador;
});
