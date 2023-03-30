// import { abilities, state, feelings } from "./global.mjs";
import { timerSection } from "./pettimer.mjs";  
import { playDecTimer, hungerDecTimer, cleanDecTimer, energyDecTimer, energyIncTimer, play, clean, feed, sleep, happyDecTimer } from "./main.mjs";
import { commandSection} from "./petabilities.mjs";
// import { doAbilitiesTrick } from "./petAbilities.mjs";

export function startIntervals() {
    window.setInterval(playDecTimer, 100);
    window.setInterval(hungerDecTimer, 2000);
    window.setInterval(cleanDecTimer, 3000);
    window.setInterval(timerSection, 1000);
    window.setInterval(energyDecTimer, 1000);
    window.setInterval(energyIncTimer, 1000);
    window.setInterval(happyDecTimer, 1000);
}

export function addEventListeners() {
    const playBtn = document.querySelector('#playBtn');
    playBtn.addEventListener('click', play);
    const cleanBtn = document.querySelector('#cleanBtn');
    cleanBtn.addEventListener('click', clean);
    const feedBtn = document.querySelector('#feedBtn');
    feedBtn.addEventListener('click', feed);
    const sleepBtn = document.querySelector('#sleepBtn');
    sleepBtn.addEventListener('click', sleep);
    const commandButton = document.querySelector('#commandButton');
    commandButton.addEventListener('click', commandSection);    
}



