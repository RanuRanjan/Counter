
// get all tags capture
let counterStore=document.querySelector("#counter")
let increment=document.querySelector("#Inc").addEventListener('click',increase)
let decrement=document.querySelector("#Dec").addEventListener('click',decrease)
let reset=document.querySelector("#reset").addEventListener('click',resetCount)
// console.log(increment);
// console.log(decrement);

// get the value of count from local storage
let counter=(localStorage.getItem("countValue"));

// appending couter to the html
counterStore.textContent=counter;



function increase(){
     counter++
     localStorage.setItem("countValue",counter)
     counterStore.textContent=counter
    }
    
    function decrease(){
        counter--
        localStorage.setItem("countValue",counter)
        counterStore.textContent=counter

}

function resetCount(){
    counter=0;
    localStorage.setItem("countValue",counter)
    counterStore.textContent=counter
}
// console.log(counter);