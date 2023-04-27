 import { playDecTimer, hungerDecTimer, cleanDecTimer, energyDecTimer, energyIncTimer, play, clean, feed, sleep, happyDecTimer } from "./main.mjs";
import { commandSection} from "./petabilities.mjs";

export function startIntervals() {   
    setInterval(playDecTimer, 100);
    setInterval(hungerDecTimer, 2000);
    setInterval(cleanDecTimer, 3000);
    setInterval(energyDecTimer, 1000);
    setInterval(energyIncTimer, 1000);
    setInterval(happyDecTimer, 1000);
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



