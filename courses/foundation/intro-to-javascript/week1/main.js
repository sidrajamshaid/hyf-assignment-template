// Age-ify (A future age calculator)

const yearOfBirth = 1992;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const dogAgeInDogYears = dogYear * 7;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogAgeInDogYears} dog years old in ${dogYearFuture}.`,
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}.`,
  );
}

// Housey pricey (A house price estimator)

const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHeight = 10;
const peterHouseGardenSizeInM2 = 100;
const peterHousePrice = 2500000;

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHeight = 8;
const juliaHouseGardenSizeInM2 = 70;
const juliaHousePrice = 1000000;

const juliaHouseVolumeInMeters =
  juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;

const peterHouseVolumeInMeters =
  peterHouseWidth * peterHouseDepth * peterHouseHeight;

const juliaHouseEstimatedPrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + juliaHouseGardenSizeInM2 * 300;

const peterHouseEstimatedPrice =
  peterHouseVolumeInMeters * 2.5 * 1000 + peterHouseGardenSizeInM2 * 300;

if (juliaHouseEstimatedPrice < juliaHousePrice) {
  console.log(
    `The estimated price is: ${juliaHouseEstimatedPrice}. So Julia is paying: ${juliaHousePrice} which is too much for her house.`,
  );
} else {
  console.log(
    `The estimated price is: ${juliaHouseEstimatedPrice}. So Julia is paying: ${juliaHousePrice} which is too little for her house.`,
  );
}

if (peterHouseEstimatedPrice < peterHousePrice) {
  console.log(
    `The estimated price is: ${peterHouseEstimatedPrice}. So Peter is paying: ${peterHousePrice} which is too much for his house.`,
  );
} else {
  console.log(
    `The estimated price is: ${peterHouseEstimatedPrice}. So Peter is paying: ${peterHousePrice} which is too little for his house.`,
  );
}

// Ez Namey (Startup name generator)

const firstWords = [
  "Fun",
  "Smart",
  "Happy",
  "Next",
  "Dream",
  "Creative",
  "Cool",
  "Green",
  "Digital",
  "Magic",
];

const secondWords = [
  "Tech",
  "World",
  "Lab",
  "Solutions",
  "Ideas",
  "Space",
  "Works",
  "Hub",
  "Studio",
  "Future",
];

const randomNumberFirst = Math.floor(Math.random() * firstWords.length);
const randomNumberSecond = Math.floor(Math.random() * secondWords.length);

const startupName =
  firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters.`,
);
