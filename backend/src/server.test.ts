import { describe, it } from "node:test";
import { deepEqual} from "node:assert";
import { convertToAnagram } from "./functions";

it("convertToAnagram function returns a string", () => {
  const anagram = convertToAnagram("Love");
  const result = (anagram: string) => {
    if (!anagram.includes("l")) {
      return;
    }
    if (!anagram.includes("v")) {
      return;
    }
    if (!anagram.includes("e")) {
      return;
    }
    if (!anagram.includes("o")) {
      return;
    }
    return anagram
  };

  const match = result(anagram)

  deepEqual(anagram, match);
});
it("convertToAnagram returns a scrambled name", () => {});

describe("Server actions", () => {
  it("the server should responds with statuscode 200", () => {});
  it("the server responds with a JSON object", () => {});
});
