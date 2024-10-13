import { describe, it } from "node:test";
import { deepEqual} from "node:assert";
import { convertToAnagram } from "./functions";

it("convertToAnagram function returns a string", () => {
  const anagram = convertToAnagram("Love");
  const fail = convertToAnagram("test")
  const result = (anagram: string) => {
   anagram.split("").forEach(letter => {
    !anagram.includes(letter)
    return
   })
   return anagram
  };

  const match = result(fail)
  console.log(match)

  deepEqual(anagram, match);
});
it("convertToAnagram returns a scrambled name", () => {});

describe("Server actions", () => {
  it("the server should responds with statuscode 200", () => {});
  it("the server responds with a JSON object", () => {});
});
