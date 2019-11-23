var path = require("path");

module.exports = function(app){
// survey.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./../public/survey.html"));
});

};