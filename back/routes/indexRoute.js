const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
const pokemon = require("../pokedex.json");
//schema
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
  id: { type: Number,required: true, unique: true},
  name: { type: String },
  types: { type: Array },
  height: { type: String },
  weight: { type: String },
  sprite: { type: String },
  description: { type: String },
  image: { type: String },
  multipliers: { type: Array },
  weaknesses: { type: Array },

});

route.get("/", (req, res) => {
  res.send("<h1>Le serveur tourne</h1>");
});

route.post("/", (err, res, next) => {
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);

  modelmongoose.insertMany(pokemon, (err, result) => {
    if (err) {
      res.send("error", err);
    } else {
      res.send("valide", result);
    }
  });
});

module.exports = route;
