
// Define Questions and Create Form Function ===================================>

console.log("startApp.js is READY")

var questions = [
    "I like to play sport ball.",
    "My family is good.",
    "I am an honest boy.",
    "2 + 1 = ??",
    "Totinos Pizza Rolls.",
    "Piracy?"
];

function createForm(array){
    var newForm = $("<div>");
    var numScale = 10;

    for (i=0;i < array.length;i++){
        var newQuestion = $("<div>");
        var newID = "q" + (i + 1);
        var newTable = $("<table>");
        var newRow = $("<tr>");
        var qDiv = $("<div>");
        $(newQuestion).attr("id",newID);
        $(qDiv).attr("class","question");
        $(qDiv).text(array[i]);
        $(newQuestion).append(qDiv);
        $(newQuestion).append(newTable);

        for (a=1; a < numScale + 1;a++){
            var newInput = $("<input>");
            var newCol = $("<td>")
            $(newInput).attr("name",newID);
            $(newInput).attr("type","radio");
            $(newInput).attr("value",a);
            $(newInput).attr("class","radioOption");
            $(newCol).append(newInput)
            $(newRow).append(newCol);
        }
        $(newTable).append(newRow);
        newRow = $("<tr>");

        for (b=1; b < numScale + 1;b++){
            var numDiv = $("<td>")
            $(numDiv).text(b);
            $(newRow).append(numDiv);
        }
        $(newTable).append(newRow);
        $(newForm).append(newQuestion);
        $(newForm).append("<br>");
        $(newForm).append("<br>");
    };
    $("#form").prepend(newForm);
};

createForm(questions);

$(".submit").on("click", function(event) {
    event.preventDefault();

    var numberAnswers = $("form").serializeArray();
    console.log(numberAnswers);
    var newPerson = {
        first_name: $("#first_name").val().trim(),
        last_name: $("#last_name").val().trim(),
        nickname: $("#nickname").val().trim(),
        q1: numberAnswers[0].value,
        q2: numberAnswers[1].value,
        q3: numberAnswers[2].value,
        q4: numberAnswers[3].value,
        q5: numberAnswers[4].value,
        q6: numberAnswers[5].value,
    };

    $.post("/api/people", newPerson,
      function(data) {
        console.log(newPerson)
    }).then(function(res){
        alert("you happen to match... " + res.first_name + " " + res.last_name + " also know as" + res.nickname)
    })
});