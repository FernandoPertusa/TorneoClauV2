// Temporizador para el inicio del torneo
const tournamentStartTime = new Date('2024-09-30T10:00:00').getTime(); // Cambia la fecha y hora aquí
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tournamentStartTime - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = `${hours}:${minutes}:${seconds}`;

    if (distance < 0) {
        clearInterval(timer);
        countdownElement.textContent = "¡El torneo ha comenzado!";
    }
}

const timer = setInterval(updateCountdown, 1000);

// Función para manejar el clic en una pareja
function setWinner(pareja, semifinalId) {
    document.getElementById(semifinalId).textContent = pareja;
}

// Asignar eventos de clic a las parejas
document.querySelectorAll('.team').forEach(team => {
    team.addEventListener('click', () => {
        const partidoId = team.parentNode.parentNode.querySelector('h3').textContent;
        if (partidoId === "Partido 1") {
            setWinner(team.textContent, 'semifinal1');
        } else if (partidoId === "Partido 2") {
            setWinner(team.textContent, 'semifinal1');
        } else if (partidoId === "Partido 3") {
            setWinner(team.textContent, 'semifinal2');
        } else if (partidoId === "Partido 4") {
            setWinner(team.textContent, 'semifinal2');
        }
    });
});

document.getElementById('show-results').addEventListener('click', function() {
    alert('Aquí se mostrarán los resultados de los partidos.');
});

