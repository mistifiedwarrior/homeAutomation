const express = require('express');
const axios = require('axios');
const path = require('path');

const IP_ADDRESS = '190.168.0.255';

const app = express();
const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

app.get('/on', (req, res) => {
  axios.get(`${IP_ADDRESS}/led/on`).then((response) => {
    res.send(response.data);
  });
});

app.get('/off', (req, res) => {
  axios.get(`${IP_ADDRESS}/led/off`).then((response) => {
    res.send(response.data);
  });
});

module.exports = app;
