import http from "http";
import fs from "fs";

// todo: read in file with words and make anagram that is a real word if exist in wordlist
function convertToAnagram(name: string) {
  const anagram = name.split("").sort(() => 0.5 - Math.random());
// join to string
}

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // possible split using regex for letters
    // todo: regex to ensure name is just letters
    const name: string = formUrl.split("=")[1];
    const anagram = convertToAnagram(name);
    const anagramJson: any = JSON.stringify({ name: anagram });
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(anagramJson);
  }
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
