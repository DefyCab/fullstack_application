import { randomizer } from "./constants";

export function convertToAnagram(name: string) {
  const split = name.split("").sort(() => 0.5 - randomizer);
  const anagram = split.join("").toLowerCase();
  return anagram;
}
