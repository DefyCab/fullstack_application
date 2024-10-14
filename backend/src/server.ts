import express from "express";
import cors from "cors"
const port = 3000;
const app = express();
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:3000/anagrams");
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to local database."));

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send('Welcome to Anagram paradise!"');
});

app.listen(port, () => {
  console.log(`Server is running. ${port}`);
});
