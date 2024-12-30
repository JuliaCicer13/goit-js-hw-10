
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", handleClick);

function handleClick (event) {

event.preventDefault();
const delayInput =
form.elements.delay.value;

const state = 
form.elements.state.value;

const delay = Number(delayInput);

const makeOrder = (delay) => {

return new Promise((resolve, reject) => {

setTimeout(( )=> {

if (state === "fulfilled") {
resolve(`✅ Fulfilled promise in ${delay}ms`);

} else {

reject(`❌ Rejected promise in ${delay}ms`);
   }
  }, delay);

});

};

makeOrder(delay)
.then((message) =>{

iziToast.show({message, 
  color: "green",
  position: "topRight",
});

})
.catch((message) => {

iziToast.show({message, 
  color: "red",
  position: "topRight",
});


});

}





