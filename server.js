/*
Here's a super simple express server to experiment with.
Try out a bunch of request urls and see what logs you get.
Go wild!
*/

const express = require('express');
const customLog = require('./src/main');

const PORT = 4000;
const app = express();

// only required if client wants to send json in the request body
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// note customLog gets passed as the second argument here
app.get('/tweets/:username/:favSport', customLog, (_req, res) => {
  res.send({ message: 'Fingers crossed we got some nice server logs' });
});

app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`));
