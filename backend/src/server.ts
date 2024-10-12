import http from "http";

const server = http.createServer((req, res) => {
  const formUrl = req.url;
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
