import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref = {
form:document.querySelector('.form'),
firstDelay:document.querySelector('input[name = "delay"]'),
step:document.querySelector('input[name = "step"]'),
amount:document.querySelector('input[name = "amount"]'),
button:document.querySelector('button'),

}
ref.form.addEventListener('submit', onSubmit)

let position = 1;

function createPromise(position, delay) {
  const promise = new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      res({ position, delay })
    } else {
     rej({ position, delay });
    }
    
  },delay)
    console.log(promise )
  return promise

}

function onSubmit(event) {
  ref.button.disabled = true
    event.preventDefault();
    const{elements: { delay, step, amount }}=event.currentTarget
  
    let  promiseDelay= Number(delay.value)
    let promiseStep= Number(step.value)
    let promiseAmount= Number(amount.value)
  
  
    console.log(promiseDelay)
    console.log(promiseStep)
    console.log(promiseAmount)
   
    const promiseId= setInterval(() => {
  
  
      createPromise(position, promiseDelay)
        .then((result) => {
          Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`)
        })
        .catch((err) => {
          Notify.failure(` ❌ Rejected promise ${err.position} in ${err.delay}ms`)
        });
     
      if (position === promiseAmount) {
        clearInterval(promiseId)
        ref.button.disabled = false;
        reset(delay, step, amount )
        return 
       
    
        }
        position += 1
        promiseDelay+= promiseStep
  },promiseDelay)
    
  
  
  }
 
function reset( delay, step, amount ) {
  delay.value=""
  step.value=""
  amount.value=""
}
