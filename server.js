var express = require('express'),
    app = express(),
    
    //Setting the port
    port=process.env.PORT || 3000;

    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'), //created model being loaded here
    bodyParser = require('body-parser');

//mongoose instance connection and url connection

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

var routes = require('./api/routes/todoListRoutes'); // importing routes
routes(app); // register the route



// Listening on port 
app.listen(port);



console.log('todo list RESTful API server started on: ' + port);