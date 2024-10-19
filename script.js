"use strict";
////////////////////////////////

let lastcalculated = false;
function numShow(element) {
  var number = element.textContent;
  document.getElementById("inputbox").value += number;
}
function calculate() {
  var inputbox = document.getElementById("inputbox").value;

  if (inputbox === "") {
    return;
  }
  if (inputbox.includes("%0") || inputbox.includes("/0")) {
    document.getElementById("inputbox").value = "";
    return;
  }
  var lastchar = inputbox[inputbox.length -1]
  if(['+','-','%','/','*'].includes(lastchar)){
    var result = document.getElementById("inputbox").value;
    let oneRemoved = result.slice(0, -1);
    document.getElementById("inputbox").value = oneRemoved;
    return;
  }

  console.log(eval(inputbox));
  document.getElementById("inputbox").value = inputbox + " = " + eval(inputbox);
  disablebuttons();
}
function reset() {
  document.getElementById("inputbox").value = "";
  enablebuttons();
}
function removeOne() {
  var result = document.getElementById("inputbox").value;
  let oneRemoved = result.slice(0, -1);
  document.getElementById("inputbox").value = oneRemoved;
}
function disablebuttons() {
  var buttons = document.getElementsByClassName("number");
  Array.from(buttons).forEach((button) => {
    button.disabled = true;
  });
  var equal = document.querySelector(".calculate");
  equal.disabled = true;
}
function enablebuttons() {
  var buttons = document.getElementsByClassName("number");
  Array.from(buttons).forEach((button) => {
    button.disabled = false;
  });
  var equal = document.querySelector(".calculate");
  equal.disabled = false;
}
