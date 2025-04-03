document.addEventListener("DOMContentLoaded", () => {
    const $tempoRestante = document.querySelector("#tempoRestante"),
          $btnIniciar = document.querySelector("#btnIniciar"),
          $btnPausar = document.querySelector("#btnPausar"),
          $btnParar = document.querySelector("#btnParar"),
          $horas = document.querySelector("#horas"),
          $minutos = document.querySelector("#minutos"),
          $segundos = document.querySelector("#segundos");

    let idInterval = null, diferenciaTemporal = 0, fechaFuturo = null;

    const colocarZeroSeForNecessario = valor => {
        return valor < 10 ? "0" + valor : valor;
    }

    const milisegundosEMHorasEMinutosESegundos = milisegundos => {
        const horas = Math.floor(milisegundos / 1000 / 3600);
        milisegundos -= horas * 1000 * 3600;
        const minutos = Math.floor(milisegundos / (1000 * 60));
        milisegundos -= minutos * 1000 * 60;
        const segundos = (milisegundos / 1000).toFixed(1);
        return `${colocarZeroSeForNecessario(horas)}:${colocarZeroSeForNecessario(minutos)}:${colocarZeroSeForNecessario(segundos)}`;
    };

    const iniciarTemporizador = (horas, minutos, segundos) => {
        const milisegundos = (segundos + minutos * 60 + horas * 3600) * 1000;
        fechaFuturo = new Date(new Date().getTime() + milisegundos);
        clearInterval(idInterval);
        idInterval = setInterval(() => {
            const tempoRestante = fechaFuturo.getTime() - new Date().getTime();
            if (tempoRestante <= 0) {
                clearInterval(idInterval);
                $tempoRestante.textContent = "00:00:00.0";
            } else {
                $tempoRestante.textContent = milisegundosEMHorasEMinutosESegundos(tempoRestante);
            }
        }, 50);
    };

    const pausarTemporizador = () => {
        diferenciaTemporal = fechaFuturo.getTime() - new Date().getTime();
        clearInterval(idInterval);
    };

    const pararTemporizador = () => {
        clearInterval(idInterval);
        fechaFuturo = null;
        diferenciaTemporal = 0;
        $tempoRestante.textContent = "00:00:00.0";
    };

    $btnIniciar.onclick = () => {
        const horas = parseInt($horas.value) || 0;
        const minutos = parseInt($minutos.value) || 0;
        const segundos = parseInt($segundos.value) || 0;
        iniciarTemporizador(horas, minutos, segundos);
    };

    $btnPausar.onclick = pausarTemporizador;
    $btnParar.onclick = pararTemporizador;
});
