var express = require("express");
var path = require("path");
var app = express();

var PORT = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('app/public'));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "app/public/survey.html"));
// });

// Listen up
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });