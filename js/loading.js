let number = document.querySelector(".number");
let num = 0;
let counter = setInterval(countLoad, 50, num);

function countLoad() {
  if (num === 100) {
    clearInterval(counter);
    document.querySelector(".circular").style.display = "none";
    document.querySelector(".container").style.display = "block";
  } else {
    num++;
    number.innerHTML = num + "<p>%</p>";
  }
}
