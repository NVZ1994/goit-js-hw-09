import Notiflix, { Notify } from 'notiflix';

const inputForm = document.querySelector('form')

function createPromise(position, delay) {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve ({position, delay})
    } else {
      reject ({position, delay})
    }
    }, delay);
  })
}

 
function runCreatePromises(event) {
  event.preventDefault();
  const inputData = new FormData(event.currentTarget);
  const option = {};

  for (const [key, value] of inputData.entries()) {
    option[key] = Number(value);
  }

  let { amount, step, delay } = option;

  for (let i = 1; i <= amount; i += 1) {
     createPromise(i, delay).then(onSuccess).catch(onError);
    delay += step;
    inputForm.reset();
  }
}

function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

inputForm.addEventListener('submit',runCreatePromises)