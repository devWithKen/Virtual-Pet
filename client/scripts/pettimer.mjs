import { timeLived } from "./global.mjs";

export function timerSection() {
    ++timeLived.seconds;
    const clockTimer = document.querySelector('#clock'); 
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

 function addZero() {
    const clockTimer = document.querySelector('#clock'); 
    if (timeLived.seconds < 10) {
        clockTimer.textContent = `Time Lived: [${timeLived.hours} : ${timeLived.minutes} : 0${timeLived.seconds}]`;
    }
    else if (timeLived.minutes < 10) {
        clockTimer.textContent = `Time Lived: [${timeLived.hours} : 0${timeLived.minutes} : ${timeLived.seconds}]`;

    }
 }