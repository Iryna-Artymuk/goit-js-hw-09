import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const body = document.querySelector(' body')
const inputWrap = document.querySelector('.input-wrap')

const timer = document.querySelector('.timer');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[ data-seconds]');
const start = document.querySelector('[ data-start]');
let timerId = null;
start.addEventListener('click',countLeftTime)

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(choosenDate.selectedDates[0])
//   },
// };

// const choosenDate = flatpickr('#datetime-picker', options);


// const targetDate = choosenDate.selectedDates[0].getTime();
// console.dir(choosenDate)

// console.log(targetDate)
    const targetDate = new Date('2022-12-31 23:59:59').getTime();
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTextContent(time) {
  days.textContent = time.days;
  hours.textContent = time.hours;
  min.textContent = time.minutes;
  sec.textContent = time.seconds;
}


function countLeftTime() {
  body.style.backgroundColor = ' #000'
  timer.style.visibility='visible';
  inputWrap.innerHTML=""
 timerId= setInterval(() => {


const currentDate = Date.now()

const deltaTime = targetDate - currentDate;

const countTime= convertMs(deltaTime )
    if (deltaTime < 0) {
      clearInterval(timerId)
      timer.innerHTML = " TIME EXPIRED";
}

  updateTextContent(countTime);
  },1000)

}

