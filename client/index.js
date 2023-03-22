// const feelings = {
//     clean: 0,
//     happy: 0,
//     feed: 100,
//     sleep: 0
// };

//  function sleepDecTimer() {

//  }
//  let state = {
//     sleep: false,
//     eating: 1.0
//  }

// //SLEEP SECTION STARTS HERE
//  function sleep() {
//     if(state.sleep) {
//         state.sleep = false
//         sleepBtn.textContent = 'Sleep';       
//     } else  {
//         state.sleep = true
//         sleepBtn.textContent = 'Awake';
//     }
//     const eyes = document.querySelector('#eyes');
//     eyes.classList.toggle('sleep');
// }       
        
// //SLEEP SECTION ENDS HERE
 


// function playDecTimer() {
   
// }
// //FEED SECTION STARTS HERE
// function feed() {
//     feelings.feed += 10;
//     const body = document.querySelector('#body');
//    if (state.eating <= 1.15) {
//         state.eating += 0.03;
//        } 
//     body.setAttribute("transform", `scale(${state.eating})`);   
//     // hungerDecTimer();

//     // console.log(state.eating);  
// }                                                                   
// function hungerDecTimer() {
//     feelings.feed = Math.max(0, --feelings.feed);
//     if (feelings.feed > 100) {
//         feelings.feed = Math.min(100, --feelings.feed);
//     } 
//     const feedMeter =  document.querySelector('#feedMeter');
//     feedMeter.value = `${feelings.feed}`;
//     const body = document.querySelector('#body');
//     state.eating = Math.max(1, --state.eating);
//     console.log(feelings.feed);
//     feed();
// }

// function bodyDecrease() {
// //  state.eating = Math.max(1.0, --state.eating);
// //  feed();

// }

// //CLEANLINESS SECTION STARTS HERE
// function clean() {
//     feelings.clean += 10;
// }

// function cleanDecTimer() {
//     feelings.clean = Math.max(0, --feelings.clean);
//     if (feelings.clean > 100) {
//         feelings.clean = Math.min(100, --feelings.clean);
//     }     
//     const cleanMeter = document.querySelector('#cleanMeter');
//     cleanMeter.value = `${feelings.clean}`;
//  }

// //CLEANLINESS SECTION ENDS HERE

// //PLAY SECTION STARTS HERE
// function play() {
//     feelings.happy = 100;
// }

//  function happyDecTimer() {
//     feelings.happy = Math.max(0, --feelings.happy);
//     adjustHands();
//  }

//  function adjustHands() {
//     const leftarm = document.querySelector('#left-hand');
//     const rightarm = document.querySelector('#right-hand');
//     leftarm.setAttribute('transform', `translate(170, 240) rotate(${feelings.happy-50})`);
//     rightarm.setAttribute('transform', `translate(325, 245) rotate(${-feelings.happy+50})`);
//     const happyMeter = document.querySelector('#happyMeter');
//     happyMeter.value = `${feelings.happy}`;
// }
// //PLAY SECTION ENDS HERE
//  function start() {
//     window.setInterval(happyDecTimer, 100);
//     window.setInterval(hungerDecTimer, 2000);
//     window.setInterval(cleanDecTimer, 3000);
//     window.setInterval(sleepDecTimer, 500);
//     const playBtn = document.querySelector('#playBtn');
//     playBtn.addEventListener('click', play);
//     const cleanBtn = document.querySelector('#cleanBtn');
//     cleanBtn.addEventListener('click', clean);
//     const feedBtn = document.querySelector('#feedBtn');
//     feedBtn.addEventListener('click', feed);
//     const sleepBtn = document.querySelector('#sleepBtn');
//     sleepBtn.addEventListener('click', sleep);
//     // sleepBtn.addEventListener('click', awake);

//     const body = document.querySelector('#body');
//     if (state.eating <= 1.15) {
//          state.eating += 0.03;
//         } 
//      body.setAttribute("transform", `scale(${state.eating})`);
//      console.log(state.eating); 
//      // bodyDecrease();


//      state.eating = Math.max(1, -0.01 + state.eating);
//      feed();
// }
// window.addEventListener('load', start);





