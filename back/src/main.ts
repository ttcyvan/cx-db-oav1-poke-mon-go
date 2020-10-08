
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const errorCreated = require('http-errors');
dotenv.config();
//Toutes les routes
const app = express();
app.use(cors());
const indexRoute = require('../routes/indexRoute');
const pokemonRoute = require('../routes/pokemon');

//connect Db
mongoose.connect("mongodb://localhost:27017/mongoDB", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () { console.log('Connect db success Local db'); });

//parsing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//route server
app.use(cors());

//All routes
app.use('/', indexRoute);
app.use('/pokemons', pokemonRoute);

//error 404
app.use((req, res, next)=>{
    next(errorCreated(404,'Please login to view this page.'));
});

app.listen(4242, () => {
    console.log(`Example app listening at http://localhost:${4242}`)
})