const express = require('express');
const http = require('http');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.get('/', (req, res) => {
    fs.readFile('dist/app/index.html', (error, data) => {
        res.end(data);
    });
});

const server = http.createServer(app);
server.listen(4000, () => {
    console.log('Server is listening...');
});