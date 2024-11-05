// INCREMENTING VARIABLES & RANDOM VALUES

// 1. Saving elements as variables cleans up your code.

var sub50btn = document.getElementById("minus50");
var sub10btn = document.getElementById("minus10");
var sub1btn = document.getElementById("minus1");
var add1btn = document.getElementById("plus1");
var add10btn = document.getElementById("plus10");
var add50btn = document.getElementById("plus50");
var display = document.getElementById("display");
var counter = 0;

sub50btn.addEventListener("click", minus50fcn);
sub10btn.addEventListener("click", minus10fcn);
sub1btn.addEventListener("click", minus1fcn);
add1btn.addEventListener("click", plus1fcn);
add10btn.addEventListener("click", plus10fcn);
add50btn.addEventListener("click", plus50fcn);

var word = document.getElementById("strIn");
var sentance = "Once upon a time,";

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before

//event function
function minus50fcn() {
  counter -= 50;
  display.innerHTML = counter;
}
function minus10fcn() {
  counter -= 10;
  display.innerHTML = counter;
}
function minus1fcn() {
  counter--;
  display.innerHTML = counter;
}
function plus1fcn() {
  counter++;
  display.innerHTML = counter;
}
function plus10fcn() {
  counter += 10;
  display.innerHTML = counter;
}
function plus50fcn() {
  counter += 50;
  display.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!

word.addEventListener("change", wordadd);

function wordadd() {
  let wordadd = word.value;

  sentance += " " + wordadd;
  document.getElementById("strOut").innerHTML = sentance;
  word.value = "";
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1 = document.getElementById("rand1");
var rand100 = document.getElementById("rand2");
var rand5 = document.getElementById("rand3");
var randinp = document.getElementById("rand4");
var randin1 = document.getElementById("rand-in1");
var randin2 = document.getElementById("rand-in2");

rand1.addEventListener("click", random1);
rand100.addEventListener("click", random2);
rand5.addEventListener("click", random3);
randinp.addEventListener("click", random4);

function random1() {
  let one = Math.random();
  one = Math.round(one);
  document.getElementById("rand1-out").innerHTML = one;
}
function random2() {
  let hundred = Math.floor(Math.random() * 101);
  document.getElementById("rand2-out").innerHTML = hundred;
}
function random3() {
  let neg = Math.floor(Math.random() * (6 + 5)) - 5;
  document.getElementById("rand3-out").innerHTML = neg;
}
function random4() {
  let inp1 = Number(randin1.value);
  let inp2 = Number(randin2.value) + 1;
  let randin = Math.floor(Math.random() * (inp2 - inp1)) + inp1;
  document.getElementById("rand4-out").innerHTML = randin;
}

// Check your understanding
// 1. Complete the rest of the incrementing buttons.
// 2. Complete the random __ to __ button.
// 3. Complete the Random Size button. This button should change the font size of all text in the body to a value between 0 and 75
var ransize = document.getElementById("random-size");
ransize.addEventListener("click", randsize);
function randsize() {
  let size = Math.random() * 75;
  size = Math.round(size);
  let sizeout = size + "px";
  document.getElementById("HTML").style.fontSize = sizeout;
}
// 4. Complete the Random Color button. This should change the html background to a random rgb color.  Hint:  `rgb(34, 245, 128)` is a value rgb color, where the numbers each range from 0 to 255. You will need three random numbers, then you will need to create a string using those numbers.

// i.e.  var rgbString = `rgb(34, 245, 128)`;
//       document.getElementById('HTML').style.background = rgbString
var color = document.getElementById("random-rgb");
color.addEventListener("click", randomcol);
function randomcol() {
  let colour1 = Math.random() * 255;
  colour1 = Math.round(colour1);
  let colour2 = Math.random() * 255;
  colour2 = Math.round(colour2);
  let colour3 = Math.random() * 255;
  colour3 = Math.round(colour3);
  let rgbval = `rgb(${colour1}, ${colour2}, ${colour3})`;
  document.getElementById("HTML").style.background = rgbval;
}
// Your job is to make the values random in the above code snippet.

// 4. Code the reset button. This will reset all variables back to initial values and clear out all input fields and reset span boxes back to dashes. It's like refresing the page without actually refreshing the page.
var reset = document.getElementById("reset");
reset.addEventListener("click", resetfunc);
function resetfunc() {
  location.reload();
}
