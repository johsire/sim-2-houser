require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');

const controller = require ('./controller');

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
   app.set('db', dbInstance)})
  .catch(err => console.log(err));

app.use(bodyParser.json());


app.post("/api/house/", controller.createHouse);
app.get("/api/house", controller.getAll);
app.post("/api/house/", controller.create);
app.delete("/api/house/:id", controller.delete);


const SERVER_PORT = process.env.SERVER_PORT || 4200;
app.listen(SERVER_PORT, () => {
  console.log(`Kevin Hart cracking em up on port: ~ ${SERVER_PORT}!`);
});
