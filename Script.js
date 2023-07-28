let counter = 0;

let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");

btns[0].onclick = () => {
  counter--;
  value.textContent = counter;
  value.style.color = "rgb(224, 48, 48)";
};
btns[1].onclick = () => {
  counter = 0;
  value.textContent = counter;
  value.style.color = "rgb(43, 42, 42)";
};

btns[2].onclick = () => {
  counter++;
  value.textContent = counter;
  value.style.color = "rgb(62, 228, 62)";
};
