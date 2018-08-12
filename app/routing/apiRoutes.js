//Setting global variable - Require the friends.js data file
// =============================================================
var friendsData = require("../data/friends.js");

//Routing
// =============================================================
module.exports = function (app) {

    // API Friends GET Request to read
    // =============================================================
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    // API Friends POST Request to create
    // =============================================================
    app.post("/api/friends", function (req, res) {

        //Object to hold the friendMatch
        // =============================================================
        var friendMatch = {
            name: "",
            photo: "",
            difference: 9999
        };

        var userData = req.body;
        


        // Loop through all the friend possibilities in the database. 
        // =============================================================
        for (var i = 0; i < friendsData.length; i++) {

            //console.log(friendsData[i].name);
            var totalDifference = 0;
            var userScores = userData.scores;

            // Loop through all the scores of each friend
            // =============================================================
            for (var j = 0; j < friendsData[i].scores[j]; j++) {

                // Add difference in scores and set them to totalDifference
                // =============================================================
                totalDifference += Math.abs(userScores[j] - friendsData[i].scores[j]);

                // If the total of the differences is less then the differences of the current friendMatch
                // =============================================================
                if (totalDifference <= friendMatch.difference) {

                    // Reset the friendMatch to be the new friend. 
                    // =============================================================
                    friendMatch.name = friendsData[i].name;
                    friendMatch.photo = friendsData[i].photo;
                    friendMatch.difference = totalDifference;
                }
            }
        }

        //Save the data from the survey to the database
        // =============================================================
        friendsData.push(userData);

        // Response to return JSON data 
        // =============================================================
        res.json(friendMatch);

    });

}