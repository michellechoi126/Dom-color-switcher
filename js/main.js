// Write your DOM code here!
const redBtn = document.querySelector('.red');
const whiteBtn = document.querySelector('.white');
const blueBtn = document.querySelector('.blue');
const yellowBtn = document.querySelector('.yellow');
const bodyEl = document.querySelector('body');

redBtn.addEventListener('click', changeBg);
whiteBtn.addEventListener('click', changeBg);
blueBtn.addEventListener('click', changeBg);
yellowBtn.addEventListener('click', changeBg);

function changeBg(e) {
    if (e.target.classList.value === "red") {
        bodyEl.style.backgroundColor = "red"
    } else if (e.target.classList.value === "white") {
        bodyEl.style.backgroundColor = "white"
    } else if (e.target.classList.value === "blue") {
        bodyEl.style.backgroundColor = "blue"
    } else if (e.target.classList.value === "yellow") {
        bodyEl.style.backgroundColor = "yellow"
    } else {
        console.log('please select valid button')
    }
}