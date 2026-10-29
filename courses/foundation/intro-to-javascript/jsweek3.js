// 1 - Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);

if (index !== -1) {
  names.splice(index, 1);
}

console.log(names);

// 2 - When will we be there?

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTravelTime(travelInformation) {
  const time = travelInformation.destinationDistance / travelInformation.speed;

  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);

  return `${hours} hours and ${minutes} minutes`;
}

const travelTime = calculateTravelTime(travelInformation);

console.log(travelTime);

// 3 - Series duration of my life

const seriesDurations = [
  {
    title: "Game of thrones",
    days: 2,
    hours: 20,
    minutes: 8,
  },
  {
    title: "Vikings",
    days: 2,
    hours: 23,
    minutes: 8,
  },
  {
    title: "The Walking Dead",
    days: 8,
    hours: 20,
    minutes: 44,
  },
];

function logOutSeriesText() {
  const lifeInMinutes = 80 * 365 * 24 * 60;
  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const series = seriesDurations[i];

    const seriesInMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;

    const seriesPercentDurationOfLife = (seriesInMinutes / lifeInMinutes) * 100;

    totalPercentage = totalPercentage + seriesPercentDurationOfLife;

    console.log(
      `${series.title} took ${seriesPercentDurationOfLife.toFixed(2)}% of my life`,
    );
  }

  console.log(
    "In total that is " + totalPercentage.toFixed(2) + "% of my life",
  );
}

logOutSeriesText();

// 4 - Note taking app

const notes = [];

function saveNote(content, id) {
  const note = {
    content,
    id,
  };

  notes.push(note);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

// Get a note

function getNote(id) {
  if (typeof id !== "number") {
    return "Please, make sure the ID is a valid number. Try again.";
  }
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    if (note.id === id) {
      return note;
    }
  }
}

console.log(getNote(1));

// Log out notes

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`,
    );
  }
}

logOutNotesFormatted();

// Unique feature - search notes by a word

function searchNotes(searchWord) {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];

    if (note.content.includes(searchWord)) {
      console.log(note.content);
    }
  }
}

searchNotes("Pick");
// Extra feature - delete a note by id

function deleteNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      notes.splice(i, 1);
    }
  }
}

deleteNote(2);

console.log(notes);
