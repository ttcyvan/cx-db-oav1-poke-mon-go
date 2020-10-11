const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
  id: { type: Number, unique: true},
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
module.exports = mongoose.model("Pokemon", PokemonSchema);
