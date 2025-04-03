var cronos;
var minutos = 0;
var segundos = 0;
var milissegundos = 0;

function init() {
    cronos = setInterval(function() { timer() }, 10); // Atualiza a cada 10 milissegundos
}

function timer() {
    milissegundos++;

    if (milissegundos >= 100) {  // 100 milissegundos = 1 segundo
        milissegundos = 0;
        segundos++;
    }

    if (segundos >= 60) {  // 60 segundos = 1 minuto
        segundos = 0;
        minutos++;
    }

    // Exibe os valores formatados
    document.getElementById('minutes').textContent = formatarTempo(minutos);
    document.getElementById('seconds').textContent = formatarTempo(segundos);
    document.getElementById('milliseconds').textContent = formatarTempo(milissegundos, 3);
}

function formatarTempo(tempo, digitos = 2) {
    return tempo.toString().padStart(digitos, '0'); // Formata o tempo para exibir com zeros à esquerda
}

function reset() {
    clearInterval(cronos);
    minutos = 0;
    segundos = 0;
    milissegundos = 0;
    document.getElementById('minutes').textContent = formatarTempo(minutos);
    document.getElementById('seconds').textContent = formatarTempo(segundos);
    document.getElementById('milliseconds').textContent = formatarTempo(milissegundos, 3);
}

function stop() {
    clearInterval(cronos);
}