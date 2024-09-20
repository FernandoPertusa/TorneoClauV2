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

// Función para seleccionar el ganador de semifinal y rellenar la final
function seleccionarGanadorSemifinal(nombreGanador, idFinal) {
    document.getElementById(idFinal).textContent = nombreGanador;
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

// Añadir eventos a los ganadores de semifinales para rellenar la final
document.getElementById('ganador-semifinal-1').addEventListener('click', function() {
    seleccionarGanadorSemifinal('Juan & María', 'ganador-semifinal-final-1');
});
document.getElementById('ganador-semifinal-2').addEventListener('click', function() {
    seleccionarGanadorSemifinal('Pedro & Ana', 'ganador-semifinal-final-1');
});
document.getElementById('ganador-semifinal-3').addEventListener('click', function() {
    seleccionarGanadorSemifinal('Luis & Carla', 'ganador-semifinal-final-2');
});
document.getElementById('ganador-semifinal-4').addEventListener('click', function() {
    seleccionarGanadorSemifinal('Álvaro & Sara', 'ganador-semifinal-final-2');
});
