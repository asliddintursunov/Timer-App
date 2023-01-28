let time = document.getElementById('time');
let startBtn = document.getElementById('start-btn');
let pauseBtn = document.getElementById('pause-btn');
let resetBtn = document.getElementById('reset-btn');

let seconds = 0;
let secs = 0;
let mins = 0;
let hrs = 0;


const timer = () => {
    counter = setInterval(() => {
        seconds++;
        if (seconds > 0 && seconds < 60) {
            secs++;
            secs = secs % seconds;
            if (secs < 10) {
                secs = '0' + secs;
            }
            mins = '00';
            hrs = '00';
        } else if(seconds >= 60 && seconds < 3600){
            mins = Math.floor(seconds / 60);
            secs = seconds % 60;
            if (secs < 10) {
                secs = '0' + secs;
            }
            if (mins < 10) {
                mins = '0' + mins;
            }
            hrs = '00';
        } else if(seconds >= 3600) {
            hrs = Math.floor(seconds / 3600)
            secs = seconds % 60;
            mins = Math.floor((seconds - 3600) / 60);

            if (secs < 10) {
                secs = '0' + secs;
            }
            if (mins < 10) {
                mins = '0' + mins;
            }
            if(hrs < 10){
                hrs = '0' + hrs;
            }
        }
        time.textContent = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

startBtn.onclick = () => {
    timer()
    startBtn.style = 'display: none;';
    pauseBtn.style = 'display: inline-block;';
}
pauseBtn.onclick = () => {
    clearInterval(counter);
    pauseBtn.style = 'display: none;';
    startBtn.style = 'display: inline-block;';
}
resetBtn.onclick = () => {
    seconds = 0;
    time.textContent = '00:00:00';
}