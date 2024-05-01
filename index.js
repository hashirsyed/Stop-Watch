const time = document.getElementById("time");
let secondsPast = 0;
let centiSecondsPast = 0;
let interval = null;

function padStart(val){
    return String(val).padStart(2,"0")
}

function setTime(){
    const centiSeconds = Math.floor(centiSecondsPast);
    const minutes = Math.floor(secondsPast / 60);
    const seconds = Math.floor(secondsPast % 60);
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(centiSeconds)}`;
}

function timer(){
    centiSecondsPast++;
    if (centiSecondsPast === 100) {
        centiSecondsPast = 0;
        secondsPast++;
    }
    setTime();
}

function startWatch() {
    if (interval === null) {
        interval = setInterval(timer, 10);
    }
}

function stopWatch() {
    clearInterval(interval);
    interval = null; // Reset the interval variable
}
function resetWatch(){
    stopWatch();
    secondsPast = 0;
    centiSecondsPast = 0;
    setTime()
}