const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
let indiceActual = 0;
const tiempoPorSlide = 20000; // Modificado a 20000ms = 20 segundos exactos por pantalla
let progresoIntervalo;
let tiempoTranscurrido = 0;

function cambiarSlide() {
    // Quitar la clase activa de la pantalla de comida actual
    slides[indiceActual].classList.remove('active');

    // Mover al siguiente plato (y reiniciar a 0 si llega al final)
    indiceActual = (indiceActual + 1) % slides.length;

    // Activar la nueva pantalla de comida con su animación suave
    slides[indiceActual].classList.add('active');

    // Reiniciar la barra de tiempo inferior
    reiniciarBarraProgreso();
}

function reiniciarBarraProgreso() {
    clearInterval(progresoIntervalo);
    tiempoTranscurrido = 0;
    progressBar.style.width = '0%';

    const pasoTiempo = 50; // Se actualiza cada 50ms para mantener el movimiento fluido
    
    progresoIntervalo = setInterval(() => {
        tiempoTranscurrido += pasoTiempo;
        let porcentaje = (tiempoTranscurrido / tiempoPorSlide) * 100;
        progressBar.style.width = `${porcentaje}%`;

        // Cuando la barra llega al 100%, cambia de pantalla
        if (tiempoTranscurrido >= tiempoPorSlide) {
            clearInterval(progresoIntervalo);
            cambiarSlide();
        }
    }, pasoTiempo);
}

// Arrancar el slider en cuanto cargue el enlace
document.addEventListener('DOMContentLoaded', () => {
    reiniciarBarraProgreso();
});
