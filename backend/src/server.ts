import http from "http";

// todo: read in file with words and make anagram that is a real word if exist in wordlist
function convertToAnagram(name: string) {
  const anagram = name.split("").sort(() => 0.5 - Math.random());
  return anagram;
}

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // possible split using regex for letters
    // todo: regex to ensure name is just letters
    const name: string = formUrl.split("=")[1];
    const nameJson: any = JSON.stringify({ name: name });
    res.writeHead(200, { "Content-type": "application/json" });
  }
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
