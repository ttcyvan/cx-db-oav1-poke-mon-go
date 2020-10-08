const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  typeList: { type: Buffer},
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
