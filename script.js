// Temporizador de cuenta atrás
function iniciarTemporizador(fechaObjetivo) {
    var countdown = document.getElementById("countdown");

    function actualizarTemporizador() {
        var ahora = new Date().getTime();
        var distancia = fechaObjetivo - ahora;

        var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
        var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

        countdown.textContent = horas + ":" + minutos + ":" + segundos;

        if (distancia < 0) {
            clearInterval(intervalo);
            countdown.textContent = "EXPIRED";
        }
    }

    var intervalo = setInterval(actualizarTemporizador, 1000);
}

// Iniciar temporizador a una hora específica
var fechaObjetivo = new Date("Sep 25, 2024 12:00:00").getTime(); // Ajusta la fecha objetivo
iniciarTemporizador(fechaObjetivo);

// Función para seleccionar el ganador y rellenar las semifinales
function seleccionarGanador(nombreGanador, idSemifinal) {
    document.getElementById(idSemifinal).textContent = nombreGanador;
}

// Añadir eventos a los ganadores de partidos para rellenar las semifinales
document.getElementById('ganador-partido-1').addEventListener('click', function() {
    seleccionarGanador('Juan & María', 'ganador-semifinal-1');
});
document.getElementById('ganador-partido-2').addEventListener('click', function() {
    seleccionarGanador('Carlos & Laura', 'ganador-semifinal-1');
});
document.getElementById('ganador-partido-3').addEventListener('click', function() {
    seleccionarGanador('Pedro & Ana', 'ganador-semifinal-2');
});
document.getElementById('ganador-partido-4').addEventListener('click', function() {
    seleccionarGanador('Miguel & Sofía', 'ganador-semifinal-2');
});
document.getElementById('ganador-partido-5').addEventListener('click', function() {
    seleccionarGanador('Luis & Carla', 'ganador-semifinal-3');
});
document.getElementById('ganador-partido-6').addEventListener('click', function() {
    seleccionarGanador('Diego & Teresa', 'ganador-semifinal-3');
});
document.getElementById('ganador-partido-7').addEventListener('click', function() {
    seleccionarGanador('Álvaro & Sara', 'ganador-semifinal-4');
});
document.getElementById('ganador-partido-8').addEventListener('click', function() {
    seleccionarGanador('Javier & Paula', 'ganador-semifinal-4');
});
