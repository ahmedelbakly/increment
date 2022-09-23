const increment = document.getElementById("incer");
const decrement = document.getElementById("decr");
const priceValue = document.getElementById("price");
let price = 50;

increment.addEventListener("click", function () {
  let mainValue = document.getElementById("mainValue").value;
  let countValue = mainValue;
  countValue++;
  document.getElementById("mainValue").value = countValue;
  priceValue.innerHTML = `$${price * countValue}`;
});

decrement.addEventListener("click", function () {
  let mainValue = document.getElementById("mainValue").value;
  let countValue = mainValue;
  countValue--;
  document.getElementById("mainValue").value = countValue;
  if (countValue < 1) {
    document.getElementById("mainValue").value = 0;
    priceValue.innerHTML = `$0`;
  }
  priceValue.innerHTML = `$${price * countValue}`;
  if (countValue < 1) {
    priceValue.innerHTML = `$${0}`;
  }

  /*  if (countValue ===0 ) {
       decrement.setAttribute("disabled", "disabled");
       
   } 
   if(countValue > 0){
    decrement.removeAttribute("disabled");
   } */
});
