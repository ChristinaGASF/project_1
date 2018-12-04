// require express and other modules
const express = require('express');
const app = express();

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });   

// bodyParser = require('body-parser'),
const db = require('./models');
// ctrl = require('./controllers');

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());

// ROUTES
// serve static files from public folder
app.use(express.static(__dirname + '/public'));


// HTML ENDPOINTS //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

// JSON ENDPOINTS
// Document all your endpoints below as a simple hardcoded JSON object.
// need to double check paths as file structure get updated
app.get('/restaurant', (req, res) => {
    res.json({
      endpoints: [
        {method: "GET", path: "/", description: "Describes all available endpoints"},
        {method: "GET", path: "/user", description: "About User"},
        {method: "GET", path: "/restaurant", description: "View list of all recommended restaurants"}, 
        {method: "GET", path: "/restaurant/:id", description: "View a specific restaurant by id"}, 
        {method: "POST", path: "/restaurant", description: "Create a new restaurant"},
        {method: "PUT", path: "/restaurant/:id", description: "Update a restaurant"}, 
        {method: "DELETE", path: "/restaurant/:id", description: "Delete a specific restaurant by id"} 
      ]
    })
  });
app.get('./user', (req, res) => {
    res.json({
      name: "",
      message: "",
      githubUsername: "", 
      githubLink: "",
      personalSiteLink: "",
      githubProfileImage:"",
      currentCity: "San Francisco, California",
      homeTown: "",
    })
  });

//SERVER
// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
  });