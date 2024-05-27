
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


let intervalId = null;
const startButton = document.querySelector('[data-start]');
const dateTimePicker = document.getElementById('datetime-picker');
const clockFace = document.getElementById('timer');



let initTime = 0;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      iziToast.error({ message: 'Please choose a date in the future' });
      startButton.disabled = true;
    } else {
      startButton.disabled = false;
      initTime = selectedDate.getTime(); // Update initTime with selected date
    }
  },
};



flatpickr(dateTimePicker, options);




startButton.addEventListener('click', function () {

  if (!dateTimePicker.value) {
 
    iziToast.error({ message: 'Please choose a date' });
    return;
  }

 
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const diff = initTime - currentTime;
    if (diff <= 0) {
      clearInterval(intervalId);
      clockFace.textContent = '00:00:00:00';
      startButton.disabled = false; 
      return;
    }
    const time = formatTime(diff);
    clockFace.textContent = time;
  }, 1000);
});

const formatTime = milliseconds => {
  const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  return [
    days.toString().padStart(2, '0'),
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
  ].join(':');
}