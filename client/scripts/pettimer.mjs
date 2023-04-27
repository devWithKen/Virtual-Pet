import { timeLived } from "./global.mjs";

timeLived.seconds = 0
//function is called every second and the value of timeLived.seconds keeps increasing
export function timerSection() {
    ++timeLived.seconds;
    if (timeLived.seconds > 59) {
        timeLived.minutes += 1;
        timeLived.seconds = 0;
    }
    else if (timeLived.minutes > 59) {
        timeLived.hours += 1;
        timeLived.minutes = 0;
    }
    addZero();
}

//adds a zero before the minute and second's value given a condition
function addZero() {
    const clockTimer = document.querySelector('#clock');
    if (timeLived.seconds < 10) {
        clockTimer.textContent = `Time Lived: [${timeLived.hours} : ${timeLived.minutes} : 0${timeLived.seconds}]`;
    }
    else if (timeLived.minutes < 10) {
        clockTimer.textContent = `Time Lived: [${timeLived.hours} : 0${timeLived.minutes} : ${timeLived.seconds}]`;
    }
}