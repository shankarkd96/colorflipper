const btn = document.getElementById("btn");
const colorText = document.getElementById("color");
const warp = document.getElementById("warp");
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", changeBG);
console.log(randHexValue());

function changeBG() {
  let tag = "#";
  for (let i = 1; i <= 6; i++) {
    tag += randHexValue();
  }
  warp.style.backgroundColor=tag
  colorText.innerHTML=tag
}

function randHexValue() {
  let randomIndex = Math.floor(Math.random() * 16);
  return arr[randomIndex];
}
