// todo: read in file with words and make anagram that is a real word if exist in wordlist
export function convertToAnagram(name: string) {
  const anagram = name.split("").sort(() => 0.5 - Math.random());
  return anagram
}
