import mongoose from "mongoose";

export const anagramSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  anagram: {
    type: String,
    required: true,
  },
});
