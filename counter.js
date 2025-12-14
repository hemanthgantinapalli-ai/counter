const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const labelCounter = document.getElementById('labelcounter');

let count = 0;

increment.onclick = function () {
  count++;
  labelCounter.textContent = count;
}

reset.onclick = function () {
  count = 0;
  labelCounter.textContent = count;
}

decrement.onclick = function () {
  count--;
  labelCounter.textContent = count;
}
