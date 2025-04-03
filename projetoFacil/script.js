const oitavas = document.querySelectorAll(".notas")
    note = document.querySelector(".tocando"),
    teclas = document.querySelectorAll(".teclas");

function tocarNota(e) {
    const audio = document.querySelector(`audio[data-key="${e.notasCodigo}"]`),
    notas = document.querySelector(`.notas[data-key="${e.notasCodigo}"]`);
    
    if (!notas)return;

    const notasMusicas = notas.getAttribute("data-note");

    notas.classList.add("tocar");
    note.innerHTML = notasMusicas;
    audio.currentTime = 0;
    audio.play();

}

function removeTransition(e) {
    if (e.propertyName !== "transformar") return;
    this.classList.remove("tocar");
}

function teclas(e, index) {
    e.setAttribute("style","trasition-delay:"+ index * 50 + "ms");
}

teclas.forEach(tocartecla);

oitavas.forEach(notas => notas.addEventListener("transitioned", removeTransition)); 
    
window.addEventListener("keydown", tocarNota);