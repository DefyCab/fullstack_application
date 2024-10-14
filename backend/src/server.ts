import express from "express";
import cors from "cors";
const port = 3000;
const app = express();
import mongoose from "mongoose";
import anagramsRouter from "./routes/anagrams.router";

mongoose.connect("mongodb://localhost:27017/anagrams");
const db = mongoose.connection;

db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to local database."));

app.use(express.json());
app.use(cors());

app.use("/anagrams", anagramsRouter);

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
