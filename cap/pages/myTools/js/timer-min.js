const progressBar = document.getElementById('progressBar');
const alarmSound = document.getElementById('alarmSound');
const startButton = document.getElementById('startTimer');
const durationInput = document.getElementById('duration');
const timeDisplay = document.getElementById('timeDisplay');
let interval;

startButton.addEventListener('click', function() {
    let durationMinutes = parseInt(durationInput.value);
    let durationSeconds = durationMinutes * 60; // Convert minutes to seconds
    clearInterval(interval);
    setTimer(durationSeconds);
    timeDisplay.innerText = `Remaining: ${durationMinutes}:00`;
});

function setTimer(duration) {
    let start = Date.now();
    let end = start + duration * 1000;
    interval = setInterval(() => {
        let current = Date.now();
        let remaining = end - current;
        if (remaining <= 0) {
            clearInterval(interval);
            alarmSound.play();
            progressBar.style.width = `100%`;
            timeDisplay.innerText = 'Time Up!';
            return;
        }
        let percentage = (1 - remaining / (duration * 1000)) * 100;
        progressBar.style.width = `${percentage.toFixed(2)}%`;

        let minutes = Math.floor(remaining / (1000 * 60));
        let seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        timeDisplay.innerText = `Remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}
