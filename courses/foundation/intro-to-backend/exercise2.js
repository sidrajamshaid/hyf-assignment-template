import express from "express";
import knex from "knex";

const app = express();
const port = 3000;
const words = [
  { id: 1, danish: "Hej", english: "Hello", category: "greetings" },
  { id: 2, danish: "Tak", english: "Thank you", category: "greetings" },
  { id: 3, danish: "Æble", english: "Apple", category: "food" },
  { id: 4, danish: "Brød", english: "Bread", category: "food" },
  { id: 5, danish: "Hus", english: "House", category: "home" },
  { id: 6, danish: "Vindue", english: "Window", category: "home" },
];
// This connects to the database stored in the file mentioned below
const knexInstance = knex({
  client: "sqlite3",
  connection: {
    filename: "./database.sqlite3",
  },
  useNullAsDefault: true, // Omit warning in console
});

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Learn Danish</title>

        <style>
          body {
            background-color: #fff5f5;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
          }

          h1 {
            color: #c8102e;
          }

          #userCount {
            color: #c8102e;
            font-size: 28px;
            font-weight: bold;
          }
        </style>
      </head>

      <body>
        <h1>🇩🇰 Welcome to Learn Danish!</h1>

        <p>Total Users: <span id="userCount"></span></p>

        <p>Practice Danish vocabulary with our API.</p>

        <script>
          fetch("/user-count")
            .then(response => response.json())
            .then(data => {
              document.getElementById("userCount").textContent = data.count;
            });
        </script>
      </body>
    </html>
  `);
});

// Here is an example of the first route, /all-users, which returns all users sorted by their ID
app.get("/all-users", async (req, res) => {
  const rows = await knexInstance.raw("SELECT * FROM users ORDER BY id ASC;");
  res.json(rows);
});

// TODO implement more routes here

// Count users from the database
app.get("/user-count", async (req, res) => {
  const result = await knexInstance("users").count("* as count");

  res.json({ count: result[0].count });
});
// Get all Danish words
app.get("/words", (req, res) => {
  res.json(words);
});
// Get a Danish word by its ID
app.get("/words/:id", (req, res) => {
  const wordId = Number(req.params.id);

  const word = words.find((w) => w.id === wordId);

  if (word) {
    res.json(word);
  } else {
    res.status(404).send("Word not found");
  }
});
// Get Danish words by category
app.get("/category/:name", (req, res) => {
  const category = req.params.name;

  const filteredWords = words.filter((word) => word.category === category);

  res.json(filteredWords);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
