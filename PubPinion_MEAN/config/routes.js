var users = require('./../server/controllers/users.js');
//  load other controllers here

module.exports = function Routes(app) {
    app.get('/',                    function(request, response) { users.index(request, response) });
    // app.get('/user',                function(request, response) { users.index(request, response) });
    // app.get('/users/index',         function(request, response) { users.index(request, response) });
    // app.get('/users/index.json',    function(request, response) { users.index_json(request, response) });

    // app.get('/users/new',           function(request, response) { users.new(request, response) });
    // app.post('/users/newUser_json', function(request, response) { users.newUser_json(request, response) });
    // app.post('/users',              function(request, response) { users.create(request, response) });

    // app.get('/users/:id',           function(request, response) { users.show(request, response) });
    // app.get('/users/:id/edit',      function(request, response) { users.edit(request, response) });

    app.io.route('registration', function(req){
        console.log(req.data.name, req.data.email, req.data.password, req.data.password_confirm);
    });

    app.io.route('login', function(req){
        console.log(req.data.email, req.data.password);
    });

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
