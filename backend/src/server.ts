import http from "http";

const server = http.createServer((req, res) => {
  if (req.url) {
    const formUrl = req.url;
    // possible split using regex for letters
    const name: string = formUrl.split("=")[1];
    const nameJson :any = JSON.stringify({ "name": name})
    res.end(nameJson);
  }
});

const hostname = "localhost";
const port = 8080;

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
