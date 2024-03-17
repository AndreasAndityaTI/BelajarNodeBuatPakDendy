const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = './';

    if (req.url === '/' || req.url === '/index') {
        filePath += 'index.html';
    } else if (req.url === '/about') {
        filePath += 'about.html';
    } else if (req.url === '/contact-me') {
        filePath += 'contact-me.html';
    } else {
        filePath += '404.html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
