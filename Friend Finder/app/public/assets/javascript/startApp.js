
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
    var form = $("<form>");
    var numScale = 10;

    for (i=0;i > array.length;i++){
        var newQuestion = $("<div>");
        var newID = "q" + (i + 1)
        $(newQuestion).attr("id",newID);
        $(newQuestion).text(array[i]);
        
        for (a=1; a > numScale;a++){
            var newInput = $("<input>");
            $(newInput).attr("name",newID);
            $(newInput).attr("type","radio");
            $(newInput).attr("value",a);
            $(newInput).text(a);
            $(newInput).append(newQuestion);
            console.log(newInput)
        }
        console.log(newQuestion)
        $(newQuestion).append(form);
    };
    console.log(form)
};

createForm(questions);