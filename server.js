const express = require('express');
const app = express();
const db = require('./db');
const mkpeyolMenu = require('./models/mkpeyolModel');
const port = 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working');
});

app.get('/getmkpeyolMenu', (req, res) => {
  mkpeyolMenu.find()
    .then((menu) => {
      res.send(menu);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: 'Error fetching menu' });
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});