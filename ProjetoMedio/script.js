document.addEventListener("DOMContentLoaded", () => {
	const $tempoRestante = document.querySelector("#tempoRestante"),
		$btnIniciar = document.querySelector("#btnIniciar"),
		$btnPausar = document.querySelector("#btnPausar"),
		$btnParar = document.querySelector("#btnParar"),
        $horas = document.querySelector("#horas")
		$minutos = document.querySelector("#minutos"),
		$segundos = document.querySelector("#segundos"),
		$contenedorInputs = document.querySelector("#contenedorInputs");
	let idInterval = null, diferenciaTemporal = 0,
		fechaFuturo = null;
	// Traz um som de uma maneira que ele permanece oculto
	const CarregarSom = function (fuente) {
		const Som = document.createElement("audio");
		Som.src = fuente;
		Som.loop = true;
		Som.setAttribute("preload", "auto");
		Som.setAttribute("controls", "none");
		Som.style.display = "none"; // <-- oculto
		document.body.appendChild(Som);
		return Som;
	};

	const Som = CarregarSom("timer.wav");
	const ocultarElemento = elemento => {
		elemento.style.display = "none";
	}

	const mostrarElemento = elemento => {
		elemento.style.display = "";
	}

    //Aqui é pego as funções hora,minutos e segundos e é feito a conversão para milisegundos
    //Aqui é feito a verificação se a data futura é nula, se for ele pega a data atual e soma com a diferença temporal
	const iniciarTemporizador = (horas, minutos, segundos) => {
		ocultarElemento($contenedorInputs);
		mostrarElemento($btnPausar);
		ocultarElemento($btnIniciar);
		ocultarElemento($btnParar);
		if (fechaFuturo) {
			fechaFuturo = new Date(new Date().getTime() + diferenciaTemporal);
			diferenciaTemporal = 0;
		} else {
			const milisegundos = (segundos + (minutos * 60) + (horas * 3600)) * 1000;
			fechaFuturo = new Date(new Date().getTime() + milisegundos);
		}
		clearInterval(idInterval);
		idInterval = setInterval(() => {
			const tempoRestante = fechaFuturo.getTime() - new Date().getTime();
			if (tempoRestante <= 0) {
				clearInterval(idInterval);
				Som.play();
				ocultarElemento($btnPausar);
				mostrarElemento($btnParar);
			} else {
				$tempoRestante.textContent = milisegundosEMHorasEMinutosESegundos(tempoRestante);
			}
		}, 50);
	};

    // função para pausar o temporizador
	const pausarTemporizador = () => {
		ocultarElemento($btnPausar);
		mostrarElemento($btnIniciar);
		mostrarElemento($btnParar);
		diferenciaTemporal = fechaFuturo.getTime() - new Date().getTime();
		clearInterval(idInterval);
	};

    // Função para parar o Temporizador
	const pararTemporizador = () => {
		clearInterval(idInterval);
		fechaFuturo = null;
		diferenciaTemporal = 0;
		Som.currentTime = 0;
		Som.pause();
		$tempoRestante.textContent = "00:00:00.0";
		init();
	};

	const colocarZeroSeForNecessario = valor => {
		if (valor < 10) {
			return "0" + valor;
		} else {
			return "" + valor;
		}
	}

    //aqui é feito a conversão de milisegundos para horas,minutos e segundos
	const milisegundosEMHorasEMinutosESegundos = (milisegundos) => {
        const horas = Math.floor(milisegundos / 1000 / 3600);
        milisegundos -= horas * 1000 * 3600;
        const minutos = Math.floor(milisegundos / (1000 * 60));
        milisegundos -= minutos * 1000 * 60;
        const segundos = (milisegundos / 1000).toFixed(1);
        return `${colocarZeroSeForNecessario(horas)}:${colocarZeroSeForNecessario(minutos)}:${colocarZeroSeForNecessario(segundos)}`;
    };
	const init = () => {
        $horas.value = "";
		$minutos.value = "";
		$segundos.value = "";
		mostrarElemento($contenedorInputs);
		mostrarElemento($btnIniciar);
		ocultarElemento($btnPausar);
		ocultarElemento($btnParar);
	};

    //Aqui é iniciado o temporizador e é feita a verificação se os valores são nulos
	$btnIniciar.onclick = () => {
        const horas = parseInt($horas.value);
		const minutos = parseInt($minutos.value);
		const segundos = parseInt($segundos.value);
		if (isNaN(horas) || isNaN(minutos) || isNaN(segundos) || (horas <= 0 && minutos <= 0 && segundos <= 0)) {
            return;
        }
		iniciarTemporizador(horas, minutos, segundos);
	};
	init();
	$btnPausar.onclick = pausarTemporizador;
	$btnParar.onclick = pararTemporizador;
});