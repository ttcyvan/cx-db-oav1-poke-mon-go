const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
//Schema
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

// AllRoutes

route.get("/", (req, res) => {
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);
  modelmongoose.find({}, "_id id name types height weight sprite description image multipliers weaknesses", (err, rep) => {
    if (err) {
      res.send(err);
      console.log("name");
    }
    res.json(rep);
  });
});


route.put("/:name", (req, res, mext) => {
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);
  const id = req.params.id;
  const _name = req.body.name;
  const _heigth = req.body.height;
  const _weight = req.body.weight;
  const _description = req.body.description;

  modelmongoose.findOneAndUpdate(
    { "id": id },{
      $set:{
        name: _name,
        heigth : _heigth,
        weight : _weight,
        description : _description
      }
    },{ new: true },(err, rep) => {
      if (err) {
        console.error("ce pokemon est faux");
        res.send(err);
      }

      if (rep === null) {
        res.json({
          message: "Invalid Update",
        });
      } else {
        console.log("Update Success", rep);
        // Show the state modified
        res.json({
          message: "Update success",
          rep: rep,
        });
      }
    }
  );
});

route.get("/:name", (req, res) => {
  let name = req.params.name;
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);
  modelmongoose.findOne({ name: name }, "_id id name types height weight sprite description image multipliers weaknesses", (err, rep) => {
    if (err) {
      res.send(err);
      console.log("name");
    }
    res.json(rep);
  });
});


//Delete
route.delete("/:name", (req, res, next) => {
  let name = req.params.name;
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);
  modelmongoose.findOneAndDelete({ name: name }, (err, rep) => {
    if (err) {
      res.send(err);
    }
    res.json(rep);
  });
});

module.exports = route;
