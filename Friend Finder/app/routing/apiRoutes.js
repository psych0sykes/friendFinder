

var peopleData = require("../data/friends.js");



module.exports = function(app){

    app.get("/api/people", function(req, res){
        res.json(peopleData);
    });

    app.post("/api/people", function(req, res){
        peopleData.push(req);
        res.json(true);
    });
};