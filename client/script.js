//COMMAND SECTION STATRS HERE
const abilities = [
    'Play a game',
    'Give me a name',
    'Make a chopping list'
];

function commandSection() {
    let command = document.querySelector('#command').value;
    const pi = document.querySelector('.disp1');
    const infoDisplayContent = document.querySelector('#infoDisplayContent');
    if (command === '') {
        pi.textContent = 'Please enter a command';
    } else if (command === 'HOW TO') {
        doAbilitiesTrick(infoDisplayContent);
    } else {
        const text = command.split(' ');
        console.log(text[2]);
        pi.textContent = `My name is ${text[2]}`;
    }
}

let timeLived = {
    seconds: 0,
    minutes: 0,
    hours: 0
}

const feelings = {
    clean: 100,
    happy: 0,
    feed: 100,
    sleep: 0
};

let state = {
    sleep: false,
    eating: 1
}

function doAbilitiesTrick(infoDisplayContent) {
    for (i = 0; i < abilities.length; i++) {
        const listOfAbilities = document.createElement('li');
        listOfAbilities.textContent = abilities[i];
        infoDisplayContent.append(listOfAbilities);
    }
    infoDisplayContent.prepend('ABILITIES');
}

function timerSection() {
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

//SLEEP SECTION STARTS HERE
function sleep() {
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
// CONTROLS BUTTON WHILE PET IS ASLEEP
function disablesButtons() {
    const buttons = document.querySelectorAll('.didsable');
    for (let btn of buttons) {
        btn.disabled = true; 
        // btn.classList = 'disabled';
    }          
}
function enableButtons() {
    const buttons = document.querySelectorAll('.didsable');
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
function feed() {    
        feelings.feed += 10; 
        if (state.eating < maxIncrease) {
            state.eating += increment;
           }
        const body = document.querySelector('#body');
        body.setAttribute("transform", `scale(${state.eating})`);  
         console.log(state.eating);
}
function sizeDecreament() {
    if (state.eating > originalSize) {
        state.eating -= decrement;
    }
    const body = document.querySelector('#body');
    body.setAttribute("transform", `scale(${state.eating})`);  
}

setInterval(sizeDecreament, 3000);

function hungerDecTimer() {
    feelings.feed = Math.max(0, --feelings.feed);
    if (feelings.feed > 100) {
        feelings.feed = Math.min(100, --feelings.feed);
    }
    adjHungerMeter();   
}



function adjHungerMeter() {
    const feedMeter = document.querySelector('#feedMeter');
    feedMeter.value = feelings.feed;
}

//CLEANLINESS SECTION STARTS HERE
function clean() {
    feelings.clean += 10;
}

function cleanDecTimer() {
    feelings.clean = Math.max(0, --feelings.clean);
    if (feelings.clean > 100) {
        feelings.clean = Math.min(100, --feelings.clean);
    }
    adjCleanMeter();
}
function adjCleanMeter() {
    const cleanMeter = document.querySelector('#cleanMeter');
    cleanMeter.value = feelings.clean;

}
//CLEANLINESS SECTION ENDS HERE

//PLAY SECTION STARTS HERE
function play() {
    feelings.happy = 100;
}

function happyDecTimer() {
    feelings.happy = Math.max(0, --feelings.happy);
    adjustHands();
}

function adjustHands() {
    const leftarm = document.querySelector('#left-hand');
    const rightarm = document.querySelector('#right-hand');
    leftarm.setAttribute('transform', `translate(170, 240) rotate(${feelings.happy - 50})`);
    rightarm.setAttribute('transform', `translate(325, 245) rotate(${-feelings.happy + 50})`);
    const happyMeter = document.querySelector('#happyMeter');
    happyMeter.value = feelings.happy;
}
//PLAY SECTION ENDS HERE
function start() {
    startIntervals();
    addEventListeners();
}


window.addEventListener('load', start);





function startIntervals() {
    window.setInterval(happyDecTimer, 100);
    window.setInterval(hungerDecTimer, 400);
    window.setInterval(cleanDecTimer, 3000);
    window.setInterval(timerSection, 1000);
}

function addEventListeners() {
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

