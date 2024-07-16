var input15 = document.getElementById("1-5");
var input25 = document.getElementById("2-5");
var input35 = document.getElementById("3-5");
var input45 = document.getElementById("4-5");
var input55 = document.getElementById("5-5");
var input14 = document.getElementById("1-4");
var input24 = document.getElementById("2-4");
var input34 = document.getElementById("3-4");
var input44 = document.getElementById("4-4");
var input54 = document.getElementById("5-4");
var input13 = document.getElementById("1-3");
var input23 = document.getElementById("2-3");
var input33 = document.getElementById("3-3");
var input43 = document.getElementById("4-3");
var input53 = document.getElementById("5-3");
var input12 = document.getElementById("1-2");
var input22 = document.getElementById("2-2");
var input32 = document.getElementById("3-2");
var input42 = document.getElementById("4-2");
var input52 = document.getElementById("5-2");
var input11 = document.getElementById("1-1");
var input21 = document.getElementById("2-1");
var input31 = document.getElementById("3-1");
var input41 = document.getElementById("4-1");
var input51 = document.getElementById("5-1");
const helpButton = document.getElementById("help")
const popUp = document.getElementById("popUp")
const closeButton = document.querySelector(".close")

function moveToNextBox(currentBox, nextBoxId) {
  var nextBox = document.getElementById(nextBoxId);
  if (nextBox) {
    nextBox.focus();
  }
}

input15.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You are Wrong!");
    document.getElementById("enterButton1" + input15.id.charAt(0)).click();
  }
});

input25.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton2" + input25.id.charAt(0)).click();
  }
});

input35.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton3" + input35.id.charAt(0)).click();
  }
});

input45.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton4" + input45.id.charAt(0)).click();
  }
});

input55.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert("You have clicked!");
    document.getElementById("enterButton5" + input55.id.charAt(0)).click();
  }
});

function guessThisWord(word) {
  const keys = word.split("");
  for (let i = 0; i < keys.length; i++) {
    const event = new KeyboardEvent("keydown", { key: keys[i] });
    document.dispatchEvent(event);
  }
  const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
}
guessThisWord("hello");

helpButton.addEventListener('click', () => {
  if(popUp.style.display === 'none') {
    popUp.style.display = 'block'
  } else {
    popUp.style.display = 'none';
  }
});

helpButton.addEventListener("click", () => {
  popUp.style.display = 'block'
});

closeButton.addEventListener("click", () => {
  popUp.style.display = 'none;'
});

window.addEventListener('click', (event) => {
  if(event.target == popUp){
    popUp.style.display = "none";
  }
})
        
        





