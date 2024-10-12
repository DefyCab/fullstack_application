import http from "http";

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // possible split using regex for letters
    const name = formUrl.split("=")[1];
    res.write(name);
    res.end();
  }
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
