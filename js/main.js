const tournamentDate = new Date("2024-08-31T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = tournamentDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("days").innerText = days;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerText = "全国大会が始まりました！";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
