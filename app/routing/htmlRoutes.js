// Dependencies
// =============================================================
var path = require("path");

//Exporting Routes
// =============================================================
module.exports = function (app) {

    //Home Page Route
    // =============================================================
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
    });

    //Survey Page Route
    // =============================================================
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
    });

    //API Friends Route
    // =============================================================
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(__dirname + "/../apiRouts.js"));
    })
}