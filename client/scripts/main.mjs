import { state, feelings } from "./global.mjs";
import { addEventListeners, startIntervals} from "./index.mjs";
import { death } from "./death.mjs";
import { timerSection } from "./pettimer.mjs";

const STEP = 1;
//SLEEP SECTION STARTS HERE
export function sleep() {
    // The energy level of the pet should increase based on how long the pet has slept and not just adding random values
    if (state.sleep) {
        state.sleep = false
        sleepBtn.textContent = 'Sleep';
        enableButtons();       
    } else {
        state.sleep = true
        sleepBtn.textContent = 'Awake';
        disablesButtons();                  
    }
    const eyes = document.querySelector('#eyes');
    eyes.classList.toggle('sleep');
}
// The value of the energy meter doesn't just increase by a certain number when the button is clicked, rather it
// increases with the amount of time the pet has slept for (increases as the pet is sleeping) and also starts 
// to decrease when the pet is awaken
export function energyDecTimer() {
    feelings.sleep -= STEP;
    feelings.sleep = Math.max(0, feelings.sleep);
    feelings.sleep = Math.min(100, feelings.sleep);
    adjEnergyMeter(); 
}
 
export function energyIncTimer() {
    if (state.sleep) {
        state.sleep = true
        feelings.sleep += 1;
    }   
    if (feelings.sleep > 100) {
        feelings.sleep = 100;
    }
}
function adjEnergyMeter() {
    const energyMeter = document.querySelector('#energyMeter');
    energyMeter.value = feelings.sleep;
    energyIncTimer();
}

// CONTROLS BUTTON WHILE PET IS ASLEEP
export function disablesButtons() {
    const buttons = document.querySelectorAll('.disable');
    for (let btn of buttons) {
        btn.disabled = true; 
        
    }          
}
function enableButtons() {
    const buttons = document.querySelectorAll('.disable');
    for (let btn of buttons) {
        btn.disabled = false; 
    }  
}
//SLEEP SECTION ENDS HERE

//FEED SECTION STARTS HERE
    let originalSize = 1;    
    const maxIncrease = 1.15;
    const increment = 0.03;
    const decrement = 0.01;
export function feed() {    
        feelings.feed += 10; 
        if (state.eating < maxIncrease) {
            //to increase the size of the pet
            state.eating += increment;
           }
        const body = document.querySelector('#body');
        body.setAttribute("transform", `scale(${state.eating})`);  
}
function sizeDecreament() {
    if (state.eating > originalSize) {
        //to decrease the size of the pet
        state.eating -= decrement;       
    }
    const body = document.querySelector('#body');
    body.setAttribute("transform", `scale(${state.eating})`);  
}

setInterval(sizeDecreament, 3000);

export function hungerDecTimer() {
    feelings.feed -= STEP;
    feelings.feed = Math.max(0, feelings.feed);
    feelings.feed = Math.min(100, feelings.feed); 
    adjHungerMeter();   
}

function adjHungerMeter() {
    const feedMeter = document.querySelector('#feedMeter');
    feedMeter.value = feelings.feed;
}

//CLEANLINESS SECTION STARTS HERE
export function clean() {
    if(feelings.clean >= 100) {
        return;
    }
    feelings.clean += 10;
}

export function cleanDecTimer() {
    feelings.clean -= STEP;
    feelings.clean = Math.max(0, feelings.clean);
    feelings.clean = Math.min(100, feelings.clean);    
    adjCleanMeter();
}
function adjCleanMeter() {
    const cleanMeter = document.querySelector('#cleanMeter');
    cleanMeter.value = feelings.clean;
}
//CLEANLINESS SECTION ENDS HERE

//PLAY SECTION STARTS HERE
export function play() {
    feelings.play = 100;
}

export function playDecTimer() {
    feelings.play = Math.max(0, --feelings.play);
    adjustHands();   
}

function adjustHands() {
    const leftarm = document.querySelector('#left-hand');
    const rightarm = document.querySelector('#right-hand');
    leftarm.setAttribute('transform', `translate(170, 240) rotate(${feelings.play - 50})`);
    rightarm.setAttribute('transform', `translate(325, 245) rotate(${-feelings.play + 50})`);  
}
//PLAY SECTION ENDS HERE

// HAPPINESS SECTION STARTS HERE

 export function adjHappyMeter() {
    const happyMeter = document.querySelector('#happyMeter');
    happyMeter.value = feelings.happy;  
}

 export function happyDecTimer() {
    const Happinessvalue = feelings.clean *  + feelings.feed * 0.30 + feelings.play * 0.25 + feelings.sleep * 0.30;
    feelings.happy = Happinessvalue;
     adjHappyMeter();    
     death();
}

function start() {
    startIntervals();
    addEventListeners();
}
//to call the start function only when any of the buttons are clicked
//so the pet doesn't start living before it's created
const signupFormEl = document.querySelector('.signup-input-holder');
signupFormEl.addEventListener('submit', start);


const loginFormEl = document.querySelector('.login-input-holder');
loginFormEl.addEventListener('submit', start);