const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const defaultPort = Number(process.env.PORT || 5173);
const host = "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  const relativePath = requestPath === "/" ? "index.html" : requestPath.replace(/^\/+/, "");
  const safePath = path.normalize(relativePath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(data);
  });
});

const maxRetries = 20;

function startServer(port, attempt = 0) {
  server.removeAllListeners("error");
  server.removeAllListeners("listening");

  server.once("error", (error) => {
    if (error.code === "EADDRINUSE" && attempt < maxRetries) {
      const nextPort = port + 1;
      console.log(`Port ${port} is busy. Retrying on ${nextPort}...`);
      startServer(nextPort, attempt + 1);
      return;
    }

    console.error("Failed to start server:", error.message);
    process.exit(1);
  });

  server.once("listening", () => {
    const address = server.address();
    const activePort = typeof address === "object" && address ? address.port : port;
    console.log(`Portfolio running at http://${host}:${activePort}`);
  });

  server.listen(port, host);
}

startServer(defaultPort);
