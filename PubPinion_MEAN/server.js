//require path module
var path = require('path');
//require express.io module and create express.io app
var express = require('express.io');
var app = express().http().io();

app.configure(function() {

    var cookieParser = require('cookie-parser');

    app.use(express.cookieParser());

    // app.use(express.session( { secret: 'ninja' }));

    //require bodyParser since we need to handle post data for adding a user
    var bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json);

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));

    //static content starts in public folder, why i don't have to start with the public folder when linking stylesheets and angular partials
    app.use(express.static(path.join(__dirname, 'public')));

    //setting views folder and ejs
    app.set('views', path.join(__dirname, 'server/views'));
    app.set('view engine', 'ejs');

    //route root
    app.get('/', function(req, res){
        //this is where we get users from database and send them to the index view to be displayed.
        //how to integrate this with angular?
        res.render('index');
    })

    //route to add new user
    app.post('/users', function(req, res){
        console.log("POST DATA: ", req.body);
        //this is where we would add the user from req.body to the database.
        res.redirect('/');
    })
});

var debug = require('debug')('mvc_template_Martin');
//require mongoose module and create mongoose variable
var mongoose = require('./config/mongoose');
//this is how we connect to the mongodb database using mongoose -- "PubPinion_db" is the name of our db in mongodb -- this should match the name of the db you are going to use for your project.
// mongoose.connect('mongodb://localhost/PubPinion_db');
var routes = require('./config/routes')(app);

app.set('port', process.env.PORT || 6789);

app.listen(app.get('port'), function() {
    console.log('\n ***************************************************');
    console.log('*****                                           *****');
    console.log('*****   Express server listening on port ' + app.get('port') + '   *****');
    console.log('*****                                           *****');
    console.log(' ***************************************************\n');
});