function getData1() {
  let number = document.getElementById('sideArea').value;
  let result = number * number
   document.getElementById('result1a').innerHTML = "L = S x S" + " = " + number + " x " + number + " = " + result;
   document.getElementById('result1b').innerHTML = "Luas persegi tersebut ialah " + result;
}
function reset1() {
  document.getElementById('sideArea').value = "";
  document.getElementById('result1a').innerHTML = "";
  document.getElementById('result1b').innerHTML = "";
}

function getData2() {
  let number = document.getElementById('sideAround').value;
  let result = 4 * number;
  console.log(number)
   document.getElementById('result2a').innerHTML = "K = 4 x S" + " = " + 4 + " x " + number + " = " + result;
   document.getElementById('result2b').innerHTML = "Keliling persegi tersebut ialah " + result;
}
function reset2() {
  document.getElementById('sideAround').value = "";
  document.getElementById('result2a').innerHTML = "";
  document.getElementById('result2b').innerHTML = "";
}

function getData3() {
  let number1 = document.getElementById('longArea').value;
  let number2 = document.getElementById('widthArea').value;
  let result = number1 * number2;
   document.getElementById('result3a').innerHTML = "L = P x l = " + number1 + " x " + number2 + " = " + result;
   document.getElementById('result3b').innerHTML = "Luas persegi panjang tersebut ialah " + result;
}
function reset3() {
  document.getElementById('longArea').value = "";
  document.getElementById('widthArea').value = "";
  document.getElementById('result3a').innerHTML = "";
  document.getElementById('result3b').innerHTML = "";
}

function getData4() {
  let number1 = document.getElementById('longAround').value;
  let number2 = document.getElementById('widthAround').value;
  let result = 2 * number1 + 2 * number2
  document.getElementById('result4a').innerHTML = "K = 2 ( P + l ) = 2 ( " + number1 + " + " + number2 + " ) = " + result;
  document.getElementById('result4b').innerHTML = "Keliling persegi panjang tersebit ialah " + result
}
function reset4() {
  document.getElementById('longAround').value = "";
  document.getElementById('widthAround').value = "";
  document.getElementById('result4a').innerHTML = "";
  document.getElementById('result4b').innerHTML = "";
}