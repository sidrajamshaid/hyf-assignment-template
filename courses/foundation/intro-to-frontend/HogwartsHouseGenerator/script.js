const button = document.querySelector("#houseButton");
const nameInput = document.querySelector("#studentName");
const result = document.querySelector("#result");
const tryAgain = document.querySelector("#tryAgain");

const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const houseColors = {
  Gryffindor: "red",
  Hufflepuff: "goldenrod",
  Ravenclaw: "blue",
  Slytherin: "green",
};

let name = "";

// Function to randomly assign a Hogwarts house
function assignHouse() {
  if (name.trim() === "") {
    result.textContent = "Please enter your name!";
    result.style.color = "black";
    return;
  }

  const randomIndex = Math.floor(Math.random() * houses.length);
  const randomHouse = houses[randomIndex];

  result.textContent = `${name.trim()} belongs in ${randomHouse}!`;
  result.style.color = houseColors[randomHouse];
}

// Find My House button
button.addEventListener("click", function () {
  name = nameInput.value;
  assignHouse();
});

// Try Again button
tryAgain.addEventListener("click", function () {
  assignHouse();
});
