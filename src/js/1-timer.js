
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


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
      document.getElementById('startButton').disabled = true;
    } else {
    
      document.getElementById('startButton').disabled = false;
    }
  },
};


flatpickr("#datetime-picker", options);


function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


document.getElementById('startButton').addEventListener('click', function() {
  const selectedDate = new Date(document.getElementById('datetime-picker').value);
  const countdownInterval = setInterval(function() {
    const currentTime = new Date();
    const timeDifference = selectedDate - currentTime;
    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      updateTimerDisplay(0, 0, 0, 0);
      document.getElementById('startButton').disabled = true;
      document.getElementById('datetime-picker').disabled = true;
    } else {
      const { days, hours, minutes, seconds } = convertMs(timeDifference);
      updateTimerDisplay(days, hours, minutes, seconds);
    }
  }, 1000);
});


function updateTimerDisplay(days, hours, minutes, seconds) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}