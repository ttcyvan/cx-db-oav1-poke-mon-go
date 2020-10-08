const express =  require('express');
const pokemons = require('json-pokemon');
const route = express.Router();
const mongoose = require('mongoose');
const pokemon = pokemons;

//Schema
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    typeList: { type: Object},
  });

route.get("/", (req, res) => {
    res.send('<h1>Le serveur tourne</h1>');   
})

route.post("/",(err, res, next)=>{
    const modelmongoose =  mongoose.model('allpokemons',PokemonSchema)
    modelmongoose.insertMany(pokemon, (err, result)=>{
        if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
    })
})

module.exports = route;