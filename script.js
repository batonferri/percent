const btn = document.getElementById("btn");
const p = document.getElementById("p");
const inputA = document.getElementById("inputA");
const inputB = document.getElementById("inputB");
var nrA;
var nrB;

const findPercent = (numb1, numb2) => {
  const rez = numb1 / 100;
  return `${numb2 / rez}%`;
};

inputA.addEventListener("change", (e) => {
  nrA = e.target.value;
  p.innerHTML = "";
});
inputB.addEventListener("change", (e) => {
  nrB = e.target.value;
  p.innerHTML = "";
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nrA || !nrB) return;
  if (nrB == 100) return (p.innerHTML = "fucking retard");
  p.innerHTML = findPercent(nrB, nrA);
});
