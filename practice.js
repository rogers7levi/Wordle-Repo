var input1 = document.getElementById("1-5");
var input2 = document.getElementById("2-5");
var input3 = document.getElementById("3-5");
var input4 = document.getElementById("4-5");
var input5 = document.getElementById("5-5");

function moveToNextBox(currentBox, nextBoxId) {
    var nextBox = document.getElementById(nextBoxId);
    if (nextBox) {
      nextBox.focus();
    }
}

input1.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton1" + input1.id.charAt(0)).click();
  }
});

input2.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton2" + input2.id.charAt(0)).click();
  }
});

input3.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton3" + input3.id.charAt(0)).click();
  }
});

input4.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton4" + input4.id.charAt(0)).click();
  }
});

input5.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton5" + input5.id.charAt(0)).click();
  }
});

function guessThisWord(word) {
const keys = word.split('');
for(let i=0; i < keys.length; i++){
    const event = new KeyboardEvent('keydown', {key:keys[i]});
    document.dispatchEvent(event);
}
const enterEvent = new KeyboardEvent('keydown', {key: 'Enter'});
}
 guessThisWord('hello')

