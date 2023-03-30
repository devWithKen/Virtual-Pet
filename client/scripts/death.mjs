import { feelings } from "./global.mjs";
import { happyDecTimer } from "./main.mjs";



export function death() {
    debugger;
    if (feelings.happy === 0) {
        const buttons = document.querySelectorAll('.button');
    for (let btn of buttons) {
        btn.disabled = true;       
        }
        
    }   
    happyDecTimer();   
}





