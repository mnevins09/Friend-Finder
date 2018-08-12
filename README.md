# Friend Finder Application

* Friend Finder is an app that helps find your most compatible person to become friends with.  This is primarily an exercise in setting up an Express server and handling routing.  On the front end, the user fills out a survey form  On the back end, an Express server handles the routing to help determine your most compatible friend.

* The survey has 10 questions. Each answer is on a scale from 1 to 5 based on the user's level of agreement or disagreement with the question.  1 being Strongly Disagree and 5 being Strongly Agree.  The server.js file requires express and body-parser as npm packages.  html_routes.js contains a GET route for displaying the survey, as well as a default USE route for the home page.  api_routes.js contains a GET route to display all possible matches as well as a POST route to handle incoming survey results to perform the compatibility logic.

* Also used in this project are jQuery and Bootstrap.

#Heroku

* Live site may be seen at https://safe-thicket-92111.herokuapp.com/


