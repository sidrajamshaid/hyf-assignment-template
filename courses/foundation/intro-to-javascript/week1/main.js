
//Age-ify (A future age calculator)

let yearOfBirth = 1992;
let yearFuture = 2045;
let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");




//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let dogAgeInDogYears = dogYear * 7;
let shouldShowResultInDogYears = false;


if (shouldShowResultInDogYears=== true )
{
    console.log("Your dog will be " + dogAgeInDogYears + " dog years old in " + dogYearFuture + ".");
} 
else
{
    console.log("Your dog will be " + dogYear + " human years old in " + dogYearFuture + ".");
}



//Housey pricey (A house price estimator)
let peterHouseWidth = 8;
let peterHouseDepth = 10;
let peterHouseHeight = 10;
let peterHouseGardenSizeInM2 = 100;
let peterHousePrice = 2500000;

let juliaHouseWidth = 5;
let juliaHouseDepth = 11;
let juliaHouseHeight = 8;
let juliaHouseGardenSizeInM2 = 70;
let juliaHousePrice = 1000000;


let juliaHouseVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHeight;
let peterHouseVolumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHeight;

let juliaHouseEstimatedPrice = juliaHouseVolumeInMeters * 2.5 * 1000 + juliaHouseGardenSizeInM2 * 300;
let peterHouseEstimatedPrice = peterHouseVolumeInMeters * 2.5 * 1000 + peterHouseGardenSizeInM2 * 300;

if (juliaHouseEstimatedPrice < juliaHousePrice) {
    console.log("The estimated price is: " + juliaHouseEstimatedPrice + ". So Julia is paying: "+ juliaHousePrice + " which is too much for her house.");
}
else {
    console.log("The estimated price is: " + juliaHouseEstimatedPrice + ". So Julia is paying: "+juliaHousePrice+" which is too little for her house.");
}


if (peterHouseEstimatedPrice< peterHousePrice) {
    console.log("The estimated price is: " + peterHouseEstimatedPrice + ". So Peter is paying: "+peterHousePrice+" which is too much for his house.");
}
else {
    console.log("The estimated price is: " + peterHouseEstimatedPrice + ". So Peter is paying: "+peterHousePrice+" which is too little for his house.");
}



//Ez Namey (Startup name generator)
let firstWords = [
    "Fun",
    "Smart",
    "Happy",
    "Next",
    "Dream",
    "Creative",
    "Cool",
    "Green",
    "Digital",
    "Magic"
];

let secondWords = [
    "Tech",
    "World",
    "Lab",
    "Solutions",
    "Ideas",
    "Space",
    "Works",
    "Hub",
    "Studio",
    "Future"
];
const randomNumberFirst = Math.floor(Math.random() * firstWords.length);
const randomNumberSecond = Math.floor(Math.random() * secondWords.length);
let startupName= firstWords[randomNumberFirst] + " " + secondWords[randomNumberSecond];
console.log("The startup name is: " + startupName);