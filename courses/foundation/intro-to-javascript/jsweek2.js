// Exercise 1 — Flight booking

function getFullname(firstName, surName, useFormalName) {
  if (useFormalName === true) {
    return "Lord " + firstName + " " + surName;
  } else {
    return firstName + " " + surName;
  }
}

const formalName = getFullname("Benjamin", "Hughes", true);
const normalName = getFullname("Benjamin", "Hughes", false);

console.log(formalName);
console.log(normalName);

// Exercise 2 — Event application

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysFromToday) {
  const today = new Date();
  const todayIndex = today.getDay();
  const eventDayIndex = (todayIndex + daysFromToday) % 7;

  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(8));

// Exercise 3 — Weather wear

function whatToWear(temperature) {
  if (temperature <= 0) {
    return "Wear winter clothing";
  } else if (temperature > 0 && temperature <= 10) {
    return "Wear a light jacket and thick clothes";
  } else if (temperature > 10 && temperature < 20) {
    return "Wear light clothes";
  } else {
    return "Wear T-shirts and shorts";
  }
}

console.log(whatToWear(-2));

// Exercise 4 — Student Manager

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You cannot add an empty string to a class");
  } else if (class07Students.includes(studentName)) {
    console.log(studentName + " is already in the class");
  } else if (
    class07Students.length < 6 ||
    studentName === "Mary Elizabeth Donaldson"
  ) {
    class07Students.push(studentName);
  } else {
    console.log("Cannot add more students to class 07");
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass("Sidra");
addStudentToClass("Benjamin");
addStudentToClass("John");
addStudentToClass("Anna");
addStudentToClass("Peter");
addStudentToClass("Sara");

addStudentToClass("David");
addStudentToClass("Mary Elizabeth Donaldson");

console.log(class07Students);
console.log(getNumberOfStudents());

// Exercise 5 — Candy Helper

const candyPrices = {
  sweet: 0.5,
  chocolate: 0.7,
  toffee: 1.1,
  chewingGum: 0.03,
};

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType === "sweet") {
    boughtCandyPrices.push(candyPrices.sweet * weight);
  } else if (candyType === "chocolate") {
    boughtCandyPrices.push(candyPrices.chocolate * weight);
  } else if (candyType === "toffee") {
    boughtCandyPrices.push(candyPrices.toffee * weight);
  } else if (candyType === "chewing-gum") {
    boughtCandyPrices.push(candyPrices.chewingGum * weight);
  }
}

const amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice = totalPrice + boughtCandyPrices[i];
  }

  if (totalPrice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}

addCandy("sweet", 20);
addCandy("chocolate", 20);
addCandy("toffee", 5);
addCandy("chewing-gum", 50);

console.log(boughtCandyPrices);
console.log(amountToSpend);

if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
