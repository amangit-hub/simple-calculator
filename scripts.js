const show = document.getElementById("show");

function appendToDisplay(input) {
  show.value += input;
}
function calculate() {
  show.value = eval(show.value);
}
function clearDiplay() {
  show.value = "";
}

function deleteButton() {
  show.value = show.value.slice(0, -1);
}
function squareRoot() {
  show.value = Math.sqrt(parseFloat(show.value));
}
