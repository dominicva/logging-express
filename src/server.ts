/*

Here's a simple express server.
Try bunch of request urls and see what logs you get!

*/

import express from 'express';
import customLog from './main';

const PORT = 4000;
const app = express();

// only required if client wants to send json in the request body
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// note customLog gets passed as the second argument here
app.get('/facts/:name/:favSport/:leastFavFood', customLog, (_req, res) => {
  res.send({ message: 'Fingers crossed we got some nice server logs' });
});

app.listen(PORT, () => console.log(`Sever running on port: ${PORT}`));
