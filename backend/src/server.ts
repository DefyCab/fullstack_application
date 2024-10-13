import http from "http";
import { convertToAnagram } from "./functions";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // todo: regex to ensure name is just letters
    // todo: remove + sign to allow for full name
    const name: string = formUrl.split("=")[1];
    try {
      if (name) {
        const anagramArr = convertToAnagram(name);
        const anagram = anagramArr.join("");
        const anagramJson: any = JSON.stringify({
          name: name,
          anagram: anagram,
        });
        fs.readFile("./names.json", function getJson(err, angramList) {
          const json = JSON.parse(angramList.toString());
          const newAnagrams = json.anagrams.push(anagramJson)
          console.log(newAnagrams)
        });
        fs.writeFile(
          "./names.json",
          JSON.stringify(
            {
              name: name,
              anagram: anagram,
            },
            null,
            2
          ),
          (error) => {
            if (error) {
              console.log("An error has occurred ", error);
              return;
            }
            res.writeHead(200, { "Content-type": "application/json" });
            res.end(anagramJson);
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
