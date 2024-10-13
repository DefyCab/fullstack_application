import http from "http";
import { convertToAnagram } from "./functions";
import fs, { writeFile } from "fs";

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // todo: regex to ensure name is just letters
    // todo: remove + sign to allow for full name
    const name: string = formUrl.split("=")[1];
    try {
      if (name) {
        const anagram = convertToAnagram(name);
        const anagramJson: any = JSON.stringify({
          name: name,
          anagram: anagram,
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
              console.log(error.message);
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
