// catch dom elements
const price = document.getElementById("price")
const button = document.getElementById("button")
const total = document.getElementById("total")




// state or data
const productPrice = 5000;
let totalPrice = 0;
// console.log(totalPrice);
// set product price initally
price.innerText = `ট ${productPrice}`;
total.innerText = `Total ট ${totalPrice}`;

button.addEventListener('click', () => {
    // console.log("clicked");
    totalPrice = totalPrice + productPrice;
    // console.log(totalPrice);
    
    // update UI

    total.innerText = `Total ট ${totalPrice}` 


})

