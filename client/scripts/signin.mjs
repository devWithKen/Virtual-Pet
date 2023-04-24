import { loadPet } from "./pagemanager.mjs";

//assigns the color of the pet if a user signs up
document.addEventListener('DOMContentLoaded', function () {
    const createButton = document.querySelector('#createButton');
    createButton.addEventListener('click', function () {
        const colorsValue = document.querySelector('#colors').value;
        assignsPetColor(colorsValue);
    });
    function assignsPetColor(colorsValue) {
        const svg = document.querySelector('.svg');
        if (colorsValue === '#') {
            const gret = document.querySelector('.signupInfo');
            gret.style.color = 'red';
            gret.textContent = 'Please select a color';
        } else if (colorsValue === 'green') {
            svg.classList.add('greenPet');
        } else if (colorsValue === 'yellow') {
            svg.classList.add('yellowPet');
        } else if (colorsValue === 'red') {
            svg.classList.add('redPet');
        } else if (colorsValue === 'custom') {
            svg.classList.add('customPet');
        } else if (colorsValue === 'pink') {
            svg.classList.add('pinkPet');
        } else if (colorsValue === 'purple') {
            svg.classList.add('purplePet');
        }
    }
});

//assigns the color of the pet if an existing user logs in
document.addEventListener('DOMContentLoaded', function () {
    const getPetButton = document.querySelector('#getPetButton');
    getPetButton.addEventListener('click', async function () {
        const form2Data = new FormData(loginFormEl);
        const userNumber = form2Data.get('number');
        const user = { userNumber };
        const existingPet = await getExistingPet(user);
        let colorsValue = existingPet.petColor;
        assignsPetColor(colorsValue);
    });
    function assignsPetColor(colorsValue) {
        const svg = document.querySelector('.svg');
        if (colorsValue === '#') {
            const gret = document.querySelector('.signupInfo');
            gret.style.color = 'red';
            gret.textContent = 'Please select a color';
        } else if (colorsValue === 'green') {
            svg.classList.add('greenPet');
        } else if (colorsValue === 'yellow') {
            svg.classList.add('yellowPet');
        } else if (colorsValue === 'red') {
            svg.classList.add('redPet');
        } else if (colorsValue === 'custom') {
            svg.classList.add('customPet');
        } else if (colorsValue === 'pink') {
            svg.classList.add('pinkPet');
        } else if (colorsValue === 'purple') {
            svg.classList.add('purplePet');
        }
    }
});


const signupFormEl = document.querySelector('.signup-input-holder');
signupFormEl.addEventListener('submit', signinHandler);

export async function signinHandler(event) {
    event.preventDefault();
    const formData = new FormData(signupFormEl);
    const petColor = formData.get('petColor');
    const petName = formData.get('petName');
    const ownerNumber = formData.get('phoneNumber');
    const users = { petColor, petName, ownerNumber };
    const response = await submit(users);
    const displayName = document.querySelector('.disp1');
    displayName.textContent = `My name is ${response.petName}`;
    const stringRes = response.toString();
    if (stringRes === "[object Object]") {
        loadPet();
    } else {
        const errorMessageForSignup = document.querySelector('.signup-input-holder');
        errorMessageForSignup.setAttribute("data-error", response);
    }
}

export async function submit(body) {
    const result = await fetch('http://localhost:8080/pets', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    return await result.json();
}

const loginFormEl = document.querySelector('.login-input-holder');
loginFormEl.addEventListener('submit', loginHandler);

export async function loginHandler(event) {
    event.preventDefault();
    const form2Data = new FormData(loginFormEl);
    const userNumber = form2Data.get('number');
    const user = { userNumber };
    const existingPet = await getExistingPet(user);
    const displayName = document.querySelector('.disp1');
    displayName.textContent = `My name is ${existingPet.petName}`;
    const stringPet = existingPet.toString();
    if (stringPet === "[object Object]") {
        loadPet();
    } else {
        const errorMessageForLogin = document.querySelector('.login-input-holder');
        errorMessageForLogin.setAttribute("data-error", stringPet);
    }
}

export async function getExistingPet(body) {
    const result = await fetch('http://localhost:8080/pets/number', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    })
    return await result.json();
}










