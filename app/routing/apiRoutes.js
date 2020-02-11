

var peopleData = require("../data/friends.js.js");

function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 1; i < a.length; i++) {
     if (a[i] < a[lowest]) lowest = i;
    }
    // console.log(lowest);
    return lowest;
   }

function comparePersons(person, people) {
    var difference = []
    for(var i = 0; i < people.length; i++){
        var comp = people[i];
        var q1 = Math.abs(person.q1 - comp.q1);
        var q2 = Math.abs(person.q2 - comp.q2);
        var q3 = Math.abs(person.q3 - comp.q3);
        var q4 = Math.abs(person.q4 - comp.q4);
        var q5 = Math.abs(person.q5 - comp.q5);
        var q6 = Math.abs(person.q6 - comp.q6);
        // console.log(q1+q2+q3+q4+q5+q6)
        difference.push(q1+q2+q3+q4+q5+q6);

    };
    return(people[indexOfSmallest(difference)])
};


module.exports = function(app){

    app.get("/api/people", function(req, res){
        res.json();

    });

    app.post("/api/people", function(req, res){
        // peopleData.push(req.body);
        console.log(comparePersons(req.body, peopleData))
        
        res.json(comparePersons(req.body, peopleData));
        // console.log(peopleData);
    });
};