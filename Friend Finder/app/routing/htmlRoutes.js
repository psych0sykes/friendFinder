

module.exports(function(app,express){
// public directory
app.use(express.static('public'));


// survey.html
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
});