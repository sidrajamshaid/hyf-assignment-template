let userName = "";
const todos = [];

const jokes = [
  "My landlord told me my rent is going up. I told him I was thrilled, because my salary certainly isn't.",
  "I asked my therapist how to handle my crippling indecisiveness. She told me to make a choice, and now I'm having a panic attack over whether it was the right choice.",
  "I have a lot of growing up to do. I realized this in the pool today when I was blowing bubbles through a pool noodle and thought, 'Goldfish can't do this.'",
  "A man goes to a bridge to jump off. A cop runs up and says, 'Don't do it! If you jump, I'll have to dive in to save you, and it's freezing out there. I'll get pneumonia and die, and my kids will be orphans. Just come back to my car, we'll have a coffee, and talk it over.' The man says okay and steps down. As they walk to the car, the man asks, 'So, what should we talk about?' The cop says, 'Well, for starters, how did you get a parking spot right next to the bridge?'",
  "I bought a self-help book for dealing with procrastination. I haven't opened it yet, but I feel like I'm making progress just looking at the cover.",
  "My wife asked me why I spoke so softly in the house. I said I was afraid Mark Zuckerberg was listening. She laughed. I laughed. Alexa laughed. Siri laughed.",
];

function getReply(command) {
  const lowerCommand = command.toLowerCase();
  const words = lowerCommand.split(" ");
  const originalWords = command.split(" ");

  // Name
  if (lowerCommand.startsWith("hello my name is")) {
    if (words[4] === userName.toLowerCase()) {
      return `I already know your name is ${userName}`;
    }

    userName = originalWords[4];
    return `Nice to meet you ${userName}`;
  }

  if (
    lowerCommand === "what is my name" ||
    lowerCommand === "what is my name?"
  ) {
    if (userName === "") {
      return "I don't know your name yet";
    }

    return `Your name is ${userName}`;
  }

  // Add todo
  if (lowerCommand.startsWith("add ")) {
    let todo = lowerCommand.replace("add ", "");
    todo = todo.replace("to my todo", "");
    todo = todo.trim();

    if (todo === "") {
      return "Please tell me what to add to your todo";
    }

    todos.push(todo);
    return `${todo} added to your todo`;
  }

  // Remove todo
  if (lowerCommand.startsWith("remove ")) {
    let todo = lowerCommand.replace("remove ", "");
    todo = todo.replace("from my todo", "");
    todo = todo.trim();

    const index = todos.indexOf(todo);

    if (index !== -1) {
      todos.splice(index, 1);
      return `${todo} removed from your todo`;
    }

    return `${todo} is not in your todo`;
  }

  // Show todos
  if (lowerCommand === "what is on my todo?") {
    return `You have ${todos.length} todos - ${todos.join(" and ")}`;
  }

  // Show date
  if (lowerCommand === "what day is it today?") {
    const today = new Date();

    const day = today.getDate();
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.getFullYear();

    return `Today is ${day}. of ${month} ${year}`;
  }

  // Basic maths
  if (
    lowerCommand.startsWith("what is ") &&
    (words[3] === "+" ||
      words[3] === "-" ||
      words[3] === "*" ||
      words[3] === "/")
  ) {
    const firstNumber = Number(words[2]);
    const operator = words[3];
    const secondNumber = Number(words[4]);

    if (operator === "+") {
      return `The answer of ${firstNumber} + ${secondNumber} is ${
        firstNumber + secondNumber
      }`;
    } else if (operator === "-") {
      return `The answer of ${firstNumber} - ${secondNumber} is ${
        firstNumber - secondNumber
      }`;
    } else if (operator === "*") {
      return `The answer of ${firstNumber} * ${secondNumber} is ${
        firstNumber * secondNumber
      }`;
    } else if (operator === "/") {
      return `The answer of ${firstNumber} / ${secondNumber} is ${
        firstNumber / secondNumber
      }`;
    }
  }

  // Timer
  if (lowerCommand.startsWith("set a timer for ")) {
    const minutes = Number(words[4]);

    if (!Number.isFinite(minutes) || minutes <= 0) {
      return "Please enter a valid number of minutes";
    }

    const milliseconds = minutes * 60 * 1000;

    setTimeout(() => {
      console.log("Timer done");
    }, milliseconds);

    return `Timer set for ${minutes} minutes`;
  }

  // Own command - Time
  if (lowerCommand === "what time is it?") {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    return `The time is ${hours}:${minutes}`;
  }

  // Own command - Random joke
  if (lowerCommand === "tell me a joke") {
    const randomNumber = Math.floor(Math.random() * jokes.length);
    return jokes[randomNumber];
  }

  return "Sorry, I didn't understand that command";
}

// Test the voice assistant

// Name
console.log(getReply("What is my name"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name?"));

// Todos
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add meeting to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));

// Empty todo
console.log(getReply("Add to my todo"));

// Date
console.log(getReply("What day is it today?"));

// Maths
console.log(getReply("What is 3 + 100"));
console.log(getReply("What is 100 - 3"));
console.log(getReply("What is 3 * 100"));
console.log(getReply("What is 3 / 100"));

// Timer
console.log(getReply("Set a timer for bananas minutes"));
console.log(getReply("Set a timer for -5 minutes"));
console.log(getReply("Set a timer for 0.1 minutes"));

// Own commands
console.log(getReply("What time is it?"));
console.log(getReply("Tell me a joke"));

// Unknown command
console.log(getReply("Can you sing a song?"));
