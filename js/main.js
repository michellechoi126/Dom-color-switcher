// Write your DOM code here!
const ulEl = document.querySelector('ul');
const bodyEl = document.querySelector('body');

ulEl.addEventListener('click', changeBg);

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