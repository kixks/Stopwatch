let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;


document.getElementById("Start").onclick = function () {

    let counter = setInterval(startCount, 1);
    function startCount() {
        milliseconds += 1;
        if (milliseconds == 1000) {
            milliseconds = 0;
            seconds += 1;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes += 1;
        }
        if (minutes == 60) {
            minutes = 0;
            hours += 1;
        }
        if (hours == 24) {
            clearInterval(counter);
        };
        document.getElementById("timer").textContent = formatTime();
    }

    document.getElementById("Stop").onclick = function() {
        clearInterval(counter);
        
    }

    document.getElementById("Reset").onclick = function () {
        hours = 0; minutes = 0; seconds = 0; milliseconds = 0;
        document.getElementById("timer").textContent = formatTime();;
    }

    function formatTime(){
        let formattedTime = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        seconds.toString().padStart(2, '0') + ':' +
        milliseconds.toString().padStart(2, '0');
        return formattedTime;
    }
}
