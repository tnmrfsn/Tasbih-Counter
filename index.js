const incrementBtn = document.getElementById("increment-btn");
const savetBtn = document.getElementById("save-btn");
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

savetBtn.addEventListener("click", () => {
  let countStr = count + " , ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
});
