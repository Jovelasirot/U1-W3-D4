const generateNumbers = () => {
  for (let i = 1; i <= 90; i++) {
    numbers.push(i);
  }
  return numbers;
};
const numbers = [];
console.log(numbers);
generateNumbers();

const createDivCells = () => {
  const cellDiv = document.getElementById("cell");

  const numbersCellDiv = document.createElement("div");
  numbersCellDiv.classList.add("numberCell");
};

// btn
const workBtn = document.getElementById("btn");

workBtn.addEventListener("submit", (e) => {
  e.preventDefault();
});

function generateRandomNumber() {
  const randomNumber = Math.floor(Math.random() * 90) + 1;
  return randomNumber;
}
console.log(button);
