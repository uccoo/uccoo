    let timer;
    let audio = document.getElementById('alarm');
    let notification = document.getElementById('notification');

    function startTimer() {
        let minutes = document.getElementById('minutes').value;
        let seconds = minutes * 60;

        timer = setInterval(function () {
            if (seconds <= 0) {
                clearInterval(timer);
                playAlarm();
            } else {
                seconds--;
                updateDisplay(seconds);
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        resetDisplay();
    }

    function playAlarm() {
        audio.play();
        notification.textContent = '时间到了！';
    }

    function updateDisplay(seconds) {
        let displayMinutes = Math.floor(seconds / 60);
        let displaySeconds = seconds % 60;

        document.title = `${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
    }

    function resetDisplay() {
        document.title = '计时器';
        notification.textContent = '';
    }