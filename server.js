const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    let page;

    if (req.url === "/" || req.url === "/index") {
        page = "index.html";
    } 
    else if (req.url === "/introduction") {
        page = "introduction.html";
    }
    else if (req.url === "/little_prince") {
        page = "little_prince.html";
    } 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - Page Not Found</h1>");
        return;
    }

    fs.readFile(path.join(__dirname, page), (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server Error");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
