import { abilities } from "./global.mjs";

export function commandSection() {
    let command = document.querySelector('#command').value;
    const pi = document.querySelector('.disp1');
    const infoDisplayContent = document.querySelector('#infoDisplayContent');
    if (command === '') {
        pi.textContent = 'Please enter a command';
    } else if (command === 'HOW TO') {
        doAbilitiesTrick(infoDisplayContent);
    } else {
        const text = command.split(' ');
        pi.textContent = `My name is ${text[2]}`;
    }
}

function doAbilitiesTrick(infoDisplayContent) {  
    for (let i = 0; i < abilities.length; i++) { 
        const listOfAbilities = document.createElement('li');
        listOfAbilities.textContent = abilities[i];
        infoDisplayContent.append(listOfAbilities);
    }
    infoDisplayContent.prepend('ABILITIES');
}
