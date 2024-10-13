import { describe, it } from "node:test";
import { match } from "node:assert";
import { convertToAnagram } from "./functions";

describe("Functions", () => {
  it("convertToAnagram function returns a string", () => {
    const anagram = convertToAnagram("Love")
    match(anagram,/evol/ )
  });
  it("convertToAnagram returns a scrambled name", () => {});
});

describe("Server actions", () => {
  it("the server should responds with statuscode 200", () => {});
  it("the server responds with a JSON object", () => {});
});
