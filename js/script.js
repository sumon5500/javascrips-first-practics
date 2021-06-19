// const display = document.querySelector(".display");
// const up = document.querySelector(".incress");
// const Down = document.querySelector(".decress");
// const clear = document.querySelector(".reset")


// let count = 0;

// function add() {
//     display.textContent = count++;
// }
// function minus() {
//     if (count < 0) {
//         alert("Error.")
//     }else{
//         display.textContent= count--;
//     }
// }
// function reset1() {
//     display.textContent = "0";
//     count= 0;
// }


// up.addEventListener("click", add);
// Down.addEventListener("click", minus);
// clear.addEventListener("click",reset1)



const Monitor = document.querySelector(".display");
// button below
const plus = document.querySelector(".incress");
const minus = document.querySelector(".decress");
const clear = document.querySelector(".reset");



let count= 0;

function add() {
    Monitor.textContent = count++;
}
function biog() {
    Monitor.textContent = count--;
}
function zero() {
    Monitor.textContent="0";
    count = 0;
}

plus.addEventListener("click", add);
minus.addEventListener("click", biog);
clear.addEventListener("click",zero);