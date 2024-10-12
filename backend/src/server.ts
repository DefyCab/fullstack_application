import http from "http";
import { convertToAnagram } from "./functions";

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // possible split using regex for letters
    // todo: regex to ensure name is just letters
    const name: string = formUrl.split("=")[1];
    try {
      if (name) {
        const anagramArr = convertToAnagram(name);
        const anagram = anagramArr.join("");
        const anagramJson: any = JSON.stringify({
          name: name,
          anagram: anagram,
        });

        res.writeHead(200, { "Content-type": "application/json" });
        res.end(anagramJson);
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
