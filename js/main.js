let initCount = 0;

let decrementBtn = document.getElementById('decrement');
let incrementBtn = document.getElementById('increment');
let counter = document.getElementById('counter');
let input = document.querySelector('input');


incrementBtn.addEventListener('click', function() {
    if(isNaN(parseInt(input.value))) return
    initCount += parseInt(input.value)
    render()
});

decrementBtn.addEventListener('click', function() {
    if(isNaN(parseInt(input.value))) return
    initCount -= parseInt(input.value)
    render()    
});


input.value = 1; 

render()
function render() {
    if(initCount < 0) counter.style.color = "red"
    else counter.style.color = "black"
    counter.textContent = initCount;
}

