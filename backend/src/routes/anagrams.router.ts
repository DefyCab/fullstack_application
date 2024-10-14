import { Router } from "express";
import { anagramSchema } from "../models/anagram.model";
import mongoose from "mongoose";

const router = Router();
const Anagram = mongoose.model("Anagram", anagramSchema);

router.get("/", async (req, res) => {
  try {
    const data = await Anagram.find();
    res.send(data);
  } catch (error: any) {
    res.json({ message: error.message });
  }
});
