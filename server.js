const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://jennunn:ernow24@cluster1.nwasb.mongodb.net/notesDB", { useNewUrlParser: true }, { useUnifiedTopology: true })

//create a data schema
const notesSchema = {
  firstName: String,
  lastName: String,
  date: Date,
  fever: Boolean,
  chills: Boolean,
  cough: Boolean,
  soreThroat: Boolean,
  breathing: Boolean,
  chest: Boolean,
  tasteSmell: Boolean,
  travel: Boolean,
  covid: Boolean,
  signature: String
  
}

const Note = mongoose.model("Note", notesSchema);

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
})

app.post("/", function(req, res){
  let newNote = new Note({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      date: req.body.date,
      fever: req.body.fever,
      chills: req.body.chills,
      cough: req.body.cough,
      soreThroat: req.body.soreThroat,
      breathing: req.body.breathing,
      chest: req.body.chest,
      tasteSmell: req.body.tasteSmell,
      travel: req.body.travel,
      covid: req.body.covid,
      signature:req.body.signature
  });
  newNote.save(); 
  res.redirect('/');
})

app.listen(3000, function(){
  console.log("server is running on 3000");
})