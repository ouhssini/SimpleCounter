// declare variables
let counter = 0;
let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

// Foreach Statment  
btns.forEach((btn, index) => {
  btn.onclick = () => {
    if (index === 0) {
      counter--;
    } else if (index === 1) {
      counter = 0;
    } else if (index === 2) {
      counter++;
    }
    if (counter < 0) {
      value.style.color = "rgb(224, 48, 48)"; // Red color
    } else if (counter > 0) {
      value.style.color = "rgb(62, 228, 62)"; // green color
    } else {
      value.style.color = "rgb(43, 42, 42)";
    }
    value.textContent = counter;
  };
});
