//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();


let items = ["Work", "Gym Workout", "Take a bath"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {

  let today = new Date();

  let options = {

    day: "numeric",
    weekday: "long",
    month: "long",

  };


  let day = today.toLocaleDateString("pt-PT", options);

res.render('list', {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
  let item = req.body.newItem;

items.push(item);

  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running in port 3000");
});
