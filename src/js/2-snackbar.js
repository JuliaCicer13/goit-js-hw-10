
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", handleClick);

function handleClick (event) {

event.preventDefault();


const makeOrder = (delay) => {
 

return new Promise((resolve, reject) => {

setTimeout(( )=> {

if ( Math.random() === "fullfilled") {
resolve(`✅ Fulfilled promise in ${delay}ms`);

} else {

reject(`❌ Rejected promise in ${delay}ms`);
   }
  }, delay);

});

};

makeOrder(delay)
.then((message) =>{

iziToast.show(message`message:
  ✅ Fulfilled promise in ${delay}ms`, 
  
 
);

})
.catch((message) => {

iziToast.show(message, `❌ Rejected promise in ${delay}ms`
 
);


});

}





