/*
Here's a super simple express server for you to experiment with what log outputs
you get depending on the url. Go wild!
*/

const express = require('express');
const customLog = require('./src/main');

const PORT = 4000;
const app = express();

// only required if client wants to send json in the request body
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  '/tweets/:username/:favSport',
  (req, _res, next) => {
    customLog(req);
    next();
  },
  (_req, res) => {
    res.send({ message: 'Fingers crossed we got some nice server logs' });
  }
);

app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`));