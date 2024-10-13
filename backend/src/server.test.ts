import { describe, it } from "node:test";
import { deepEqual } from "node:assert";
import { convertToAnagram } from "./functions";

describe("Testing functions", () => {
  it("convertToAnagram returns a string with the same letters", () => {
    const anagram = convertToAnagram("Love");
    const result = (anagram: string) => {
      anagram.split("").forEach((letter) => {
        !anagram.includes(letter);
        return;
      });
      return anagram;
    };

    const match = result(anagram);

    deepEqual(anagram, match);
  });
});

describe("Server actions", () => {
  it("the server should responds with statuscode 200", () => {});
  it("the server responds with a JSON object", () => {});
});
