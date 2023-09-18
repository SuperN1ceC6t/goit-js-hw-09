
const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
const background = document.querySelector('body')

let timerId = null

startBtn.addEventListener('click', onStart)
stopBtn.addEventListener('click', onStop)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStart() {
    timerId = setInterval(getBackgroundColor, 1000)
    startBtn.toggleAttribute('disabled')
    stopBtn.removeAttribute('disabled');
}

function onStop() {
    clearInterval(timerId);
    startBtn.removeAttribute('disabled')
    stopBtn.toggleAttribute('disabled');
}

function getBackgroundColor() {
    background.style.backgroundColor = getRandomHexColor();
}

onStop()