// var mongoose = require('mongoose')
// var User = mongoose.model('User');

module.exports = {
    index: function(request, response) {
        response.render('users/index',  { title: 'Welcome Page' });
    },
    index_json: function(request, response) { 
        User.find({}, function(err, results) {
            response.send(JSON.stringify(results));
        });
    },

    new: function(request, response) {
        response.render('users/new',  { title: 'New User' });
    },
    create: function(request, response) {
        var a = new User(request.body);
        a.save(function(err) {
            if (err) {
                response.send(JSON.stringify(err));
            } else {
                response.send('success');
            }
        });
    },
    show: function(request, response) {
        response.render('users/show', { title:'User Detail'});
    },
    edit: function(request, response) {
        response.render('users/edit', { title:'Edit User'});
    }
}
