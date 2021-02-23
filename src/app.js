const express = require('express');
const path = require('path');

const app = express();
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

const details = {title: 'IOT Project', name: 'Aditi'};

app.get('/', (_req, res) => {
  res.render('index', details);
});

module.exports = app;
