const input15 = document.getElementById("1-5");
const input25 = document.getElementById("2-5");
const input35 = document.getElementById("3-5");
const input45 = document.getElementById("4-5");
const input55 = document.getElementById("5-5");
const input14 = document.getElementById("1-4");
const input24 = document.getElementById("2-4");
const input34 = document.getElementById("3-4");
const input44 = document.getElementById("4-4");
const input54 = document.getElementById("5-4");
const input13 = document.getElementById("1-3");
const input23 = document.getElementById("2-3");
const input33 = document.getElementById("3-3");
const input43 = document.getElementById("4-3");
const input53 = document.getElementById("5-3");
const input12 = document.getElementById("1-2");
const input22 = document.getElementById("2-2");
const input32 = document.getElementById("3-2");
const input42 = document.getElementById("4-2");
const input52 = document.getElementById("5-2");
const input11 = document.getElementById("1-1");
const input21 = document.getElementById("2-1");
const input31 = document.getElementById("3-1");
const input41 = document.getElementById("4-1");
const input51 = document.getElementById("5-1");
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
        






