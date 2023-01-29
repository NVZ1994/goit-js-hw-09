function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

let timerId = null;

const onStartBtnClick = () => {
    refs.startBtn.setAttribute('disabled', true)
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

const onStopBtnClick = () => {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled')
}

refs.startBtn.addEventListener('click', onStartBtnClick)
refs.stopBtn.addEventListener('click', onStopBtnClick)