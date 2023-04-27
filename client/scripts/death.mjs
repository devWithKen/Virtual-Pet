import { feelings, timeLived } from "./global.mjs";
import { timerSection } from "./pettimer.mjs";
import { submit, getExistingPet } from "./signin.mjs";

const deathInfo = document.querySelector('#deathInfo-container');
const deathReason = document.querySelector('#deathReason');
const timeSurvived = document.querySelector('#timeLived');
const restartBtn = document.querySelector('#restartBtn')
const petDeath = document.querySelector('#deathMessage');
const timerSectionClear = setInterval(timerSection, 1000);
const eyes = document.querySelector('#eyes');

export function death() {
    if (feelings.happy === 0) {
        const buttons = document.querySelectorAll('.button');
        for (let btn of buttons) {
            btn.disabled = true;
        }
        clearInterval(timerSectionClear);
        eyes.classList.add('sleep');
        deathPopUpManager();
        deathPopUpManagerFromSignup();
        deathInfo.classList.remove('hide');
        restartBtn.disabled = false
    }
}

async function deathPopUpManager() { 
    const loginFormEl = document.querySelector('.login-input-holder');
    const form2Data = new FormData(loginFormEl);
    const userNumber = form2Data.get('number');
    const user = { userNumber };
    const existingPet = await getExistingPet(user);
    petDeath.textContent = `Your pet ${existingPet.petName} has died!`;
    deathReason.textContent = `${existingPet.petName} died due to lack of happiness`;
    timeSurvived.textContent = `${existingPet.petName} survived for ${timeLived.seconds} seconds`;
}

async function deathPopUpManagerFromSignup() {
   
    // const signupFormEl = document.querySelector('.signup-input-holder');
    // const formData = new FormData(signupFormEl);
    // const petColor = formData.get('petColor');
    // const petName = formData.get('petName');
    // const ownerNumber = formData.get('phoneNumber');
    // const users = { petColor, petName, ownerNumber };
    // const response = await submit(users);
    // petDeath.textContent = `Your pet ${response.petName} has died!`
    // console.log(response.petName);
}


export { timerSectionClear };