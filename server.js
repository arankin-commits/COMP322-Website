
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    const url = new URL(req.url, "http://localhost");
    let pathname = decodeURIComponent(url.pathname);

    if (pathname === "/" || pathname === "/index") {
        pathname = "/index.html";
    }
    else if (pathname === "/introduction") {
        pathname = "/introduction.html";
    }
    else if (pathname === "/little_prince") {
        pathname = "/little_prince.html";
    }

    const root = path.resolve(__dirname);
    const filePath = path.resolve(root, "." + pathname);

    if (!filePath.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end("403 Forbidden");
        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });
            res.end("404 - File Not Found");
            return;
        }

        const ext = path.extname(filePath).toLowerCase();

        const types = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".gif": "image/gif",
            ".webp": "image/webp",
            ".svg": "image/svg+xml",
            ".ico": "image/x-icon"
        };

        res.writeHead(200, {
            "Content-Type": types[ext] || "application/octet-stream"
        });

        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
