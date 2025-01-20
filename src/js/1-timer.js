
import  flatpickr  from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import  {iziToast}  from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const startButton = document.querySelector('button[data-start]');
const dataInput = document.querySelector('#datetime-picker');
const timerDisplay = document.querySelector('.timer');
const daysField = document.querySelector("[data-days]");
const dataTimePicker = document.querySelector("#datetime-picker");
const hoursField = document.querySelector("[data-hours]");
const minutesField = document.querySelector("[data-minutes]");
const secondsField = document.querySelector("[data-seconds]");


let userSelectedDate = null;

let timeInterval = null;

function addLeadingZero(value)
{
  return String(value).padStart(2, '0');
 }

function convertMs(ms) {
  
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  
  const days = Math.floor(ms / day);

  const hours = Math.floor((ms % day) / hour);
 
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




 
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate =
      selectedDates[0];
    
     if (selectedDates <= new Date ()) {
       iziToast.warning({
         title: "Invalid Date",
         message: "Please choose a date in the future"});
    
startButton.disabled = true;

  } else {
  
  startButton.disabled = false;
  userSelectedDate =
    selectedDates;
    }
  },
};
  

 

flatpickr(dataTimePicker, options);


function startTimer() {
  if (!userSelectedDate) return;

  startButton.disabled = true;
  dataTimePicker.disabled = true;

  timeInterval = setInterval(() => {


    const now = new Date();
    const timeLeft = userSelectedDate - now; 
    if (timeLeft <= 0) {

      clearInterval(timeInterval);
      dataTimePicker.disabled =
        false;
      startButton.disabled = true;

      daysField.textContent = "00";
      hoursField.textContent = "00";
      minutesField.textContent = "00";
      secondsField.textContent = "00";

      iziToast.info({
        title: "Timer finished!",
        message: "Your countdown is complited!"
      });
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    daysField.textContent = addLeadingZero(days);
    hoursField.textContent = addLeadingZero(hours);
    minutesField.textContent = addLeadingZero(minutes);
    secondsField.textContent = addLeadingZero(seconds);

  }, 1000);


}

startButton.addEventListener("click", startTimer);




