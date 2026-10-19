// Tiny local server: run `node serve.js`, then open http://localhost:8123
const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = process.env.PORT || 8123;
const types = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".mp3": "audio/mpeg", ".m4a": "audio/mp4", ".png": "image/png", ".svg": "image/svg+xml", ".txt": "text/plain" };

http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(root, p);
  if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end("Not found"); }
    const type = types[path.extname(file).toLowerCase()] || "application/octet-stream";
    // support byte ranges so audio can jump to a part (needed for Ayatul Kursi)
    const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || "");
    if (m) {
      const start = m[1] ? +m[1] : data.length - +m[2];
      const end = m[1] && m[2] ? Math.min(+m[2], data.length - 1) : data.length - 1;
      res.writeHead(206, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Range": `bytes ${start}-${end}/${data.length}`, "Content-Length": end - start + 1 });
      return res.end(data.subarray(start, end + 1));
    }
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Length": data.length });
    res.end(data);
  });
}).listen(port, () => console.log("Quran Stars running at http://localhost:" + port));
