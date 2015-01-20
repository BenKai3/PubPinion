var users = require('./../server/controllers/users.js');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Question = mongoose.model('Question');

//  load other controllers here

module.exports = function Routes(app) {
    app.get('/', function(request, response) { users.index(request, response) });

    app.io.emit

    app.io.route('registration', function(req, res){

        // console.log(req.data.name, req.data.email, req.data.password, req.data.password_confirm);

        var user = new User({name: req.data.name, email: req.data.email, password: req.data.password, password_confirm: req.data.password_confirm});

        user.save(function(err){
            if(err){
                console.log('\n\n\nuser not added, err: '+err + '\n\n\n');
                // console.log(err.errors.email.message);
                req.io.emit('failed_reg', { error: err });
            }
            else{
                console.log('successfully added a user!');
                req.io.emit('successful_login', { name: req.data.name, mail: req.data.email, password: req.data.password });
            };
        });
    });

    app.io.route('login', function(req){
        console.log(req.data.email, req.data.password);

        User.findOne({email: req.data.email, password: req.data.password}, function(err, user){
            console.log(user);
                if(user){
                    console.log('successful_login');
                    req.io.emit('successful_login', { name: req.data.name, mail: req.data.email, password: req.data.password });
                }
                else{
                    console.log('failed_login');
                    req.io.emit('failed_login', { fail_message: "User not found. Please be sure to spell the email and password correctly" });
                };

        // var database_search = db.users.find({ email: req.data.email, password: req.data.password });
        // if (database_search.email === req.data.email && database_search.password === req.data.password){
        //     console.log('successfully logged in a user!');
        //     req.io.emit('successful_login', { name: req.data.name, mail: req.data.email, password: req.data.password });
            });
    });







    // app.get('/user',                function(request, response) { users.index(request, response) });
    // app.get('/users/index',         function(request, response) { users.index(request, response) });
    // app.get('/users/index.json',    function(request, response) { users.index_json(request, response) });

    // app.get('/users/new',           function(request, response) { users.new(request, response) });
    // app.post('/users/newUser_json', function(request, response) { users.newUser_json(request, response) });
    // app.post('/users',              function(request, response) { users.create(request, response) });

    // app.get('/users/:id',           function(request, response) { users.show(request, response) });
    // app.get('/users/:id/edit',      function(request, response) { users.edit(request, response) });

    // app.io.route('client_ready',    function(request) {
    //     console.log('A new user connected.');

    //     // sending a message to just that person
    //     request.io.emit('info', { msg: 'The world is round, there is no up or down.' }); 

    //     // broadcasting to everyone
    //     app.io.broadcast('global_event', { msg: 'hello' });      

    //     // broadcasting an event to everyone except the person you established the socket connection to
    //     request.io.broadcast('event', {msg: 'hi' });        

    //     // listening for an event
    //     app.io.route('my other event', function(data) { console.log("Received 'my other event' :", data); });  
    //     app.io.route('disconnect',  function() { app.io.broadcast('user disconnected'); });
    // });
};
