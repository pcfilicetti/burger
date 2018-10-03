var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgersController.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on PORT " + PORT);
});