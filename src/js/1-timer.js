
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dataButton = document.querySelector('button[data-start]');

let userSelectedDate = new Data();

console.log(userSelectedDate);

flatpickr(selector, options);
 
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

function flatpickr() { };


dataButton.addEventListener("click", handleTimer);

function handleTimer(event) {
  event



}