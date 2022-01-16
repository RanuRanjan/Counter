let counterStore=document.querySelector("#counter")





let increment=document.querySelector("#Inc").addEventListener('click',increase)
let decrement=document.querySelector("#Dec").addEventListener('click',decrease)
let reset=document.querySelector("#reset").addEventListener('click',resetCount)
// console.log(increment);
// console.log(decrement);


let counter=(localStorage.getItem("countValue"));
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
counterStore.textContent=counter;