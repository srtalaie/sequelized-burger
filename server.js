//Dependencies
const express = require('express');
const bodyParser = require('body-parser');

//Intialize Express app
let app = express();

//Set PORT
const PORT = process.env.PORT || 8080

// Static directory
app.use(express.static("public"));

//Sync with db
let db = require('./models');

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set Handlebars.
let handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
let routes = require("./routes/api-routes.js");
app.use(routes);

//Sync Sequelize Models and Start Express app after
db.sequelize.sync( {force: true} ).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });