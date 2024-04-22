const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const port = 3000;

const app = express();

let totalViews = 0;

app.get('/index.html', (req, res) => {
    totalViews++;

    let html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    html = ejs.render(html, {views: totalViews});

    res.send(html);
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.use(express.static(path.join(__dirname, "img")));
app.use(express.static(path.join(__dirname, "views")));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});