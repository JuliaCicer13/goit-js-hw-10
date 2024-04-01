
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const startButton = document.getElementById('startButton');
const dateTimePicker = document.getElementById('datetime-picker');


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future'
      });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
    }
  },
};


flatpickr(dateTimePicker, options);


startButton.addEventListener('click', function() {
  const selectedDate = new Date(dateTimePicker.value);
  const countdownInterval = setInterval(function() {
    const currentTime = new Date();
    const timeDifference = selectedDate - currentTime;
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay(0, 0, 0, 0);
      startButton.disabled = true;
      dateTimePicker.disabled = true;
    } else {
      
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  }, 1000);

  
  startButton.disabled = true;
  dateTimePicker.disabled = true;
});


function updateTimerDisplay(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function convertMs(milliseconds) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);
  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;
  return { days, hours, minutes, seconds };
}