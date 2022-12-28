import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[ data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    counttime();
  },
};

const choosenDate = flatpickr('#datetime-picker', options);

// const targetDate = new Date(choosenDate.selectedDates[0].getDate());
const targetDate = choosenDate.selectedDates[0].getTime();


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


function counttime() {

    const currentDate = Date.now();

    const deltaTime = targetDate - currentDate;
    console.log(currentDate)
    console.log( targetDate )

    const time = convertMs(deltaTime);
    console.log(deltaTime);
    console.log(time);
    updateTextContent(time) 

}
