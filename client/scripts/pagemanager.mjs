const createButton = document.querySelector('#restartBtn');
const getPetLink = document.querySelector('.loginLink');
const createPetLink = document.querySelector('.signupLink');
const svgSection = document.querySelector('#svgSection');
const loginSection = document.querySelector('#loginSection');
const signupSection = document.querySelector('#signinSection');
const deathInfo = document.querySelector('#deathInfo-container')

getPetLink.addEventListener('click', displaySignupPage);
createPetLink.addEventListener('click', displayLoginPage);
createButton.addEventListener('click', removeDeathPage);

window.onload = displaySignupPage();

//function hides every other section of the html page except the signupSection
function displaySignupPage() {
    signupSection.classList.remove('hide');
    svgSection.classList.add('hide');
    loginSection.classList.add('hide');
    deathInfo.classList.add('hide');
}

//function reloads the page when the pet dies on button click
function removeDeathPage() {
    location.reload();
}

//function hides every other section of the html page except the loginSection
function displayLoginPage() {
    loginSection.classList.remove('hide');
    svgSection.classList.add('hide');
    signupSection.classList.add('hide');
    deathInfo.classList.add('hide');
}

//function hides every other section of the html page except the svgSection
export function loadPet() {
    deathInfo.classList.add('hide');
    loginSection.classList.add('hide');
    svgSection.classList.remove('hide');
    signupSection.classList.add('hide');
}



