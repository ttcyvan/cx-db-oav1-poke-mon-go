const express = require("express");
const route = express.Router();
const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;
const PokemonSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  typeList: { type: Object },
});

// AllRoutes

route.get("/", (req, res) => {
  const modelmongoose = mongoose.model("allpokemons", PokemonSchema);
  modelmongoose.find({}, "_id id name typeList", (err, rep) => {
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
  const _typelist1 = req.body.typeList[0];
  const _typelist2 = req.body.typeList[1];
  modelmongoose.findOneAndUpdate(
    { "id": id },{
      $set:{
        name: _name,
        typelist1: _typelist1,
        typelist2: _typelist2,
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
  modelmongoose.findOne({ name: name }, "_id id name typeList", (err, rep) => {
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
