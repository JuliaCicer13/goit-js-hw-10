
import  iziToast  from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", handleClick);

function handleClick (event) {

event.preventDefault();


const makeOrder = (delay) => {
 

return new Promise((resolve, reject) => {

setTimeout(( )=> {

if ( Math.random() > 0.5) {
resolve(`✅ Fulfilled promise in ${delay}ms`);

} else {

reject(`❌ Rejected promise in ${delay}ms`);
   }
  }, delay);

});

};

makeOrder()
  .then((delay) => {

    iziToast.show({
      title: "Fullfield",
      message:`message
  ✅ Fulfilled promise in ${delay}ms`,
     color: "green",    
  
 
});

})
.catch((delay) => {

  iziToast.show({
    titel: "Error",
    message: `message ❌ Rejected promise in ${delay}ms`,
    color:"red",
 
  });


});

}





