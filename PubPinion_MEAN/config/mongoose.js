var mongoose = require('mongoose');

var env = process.env.NODE_ENV || 'development';
var fs = require('fs');
var config = require('./config')[env];

// Bootstrap db connection
// Connect to mongodb
var connect = function () {
    var options = { server: { socketOptions: { keepAlive: 1 } } }
    mongoose.connect(config.db, options)
};
connect();

// Error handler
mongoose.connection.on('error', function (err) {
    console.log(err)
});

// Reconnect when closed
mongoose.connection.on('disconnected', function () {
    connect();
});

// Bootstrap models
var models_path = __dirname + '/../server/models';
fs.readdirSync(models_path).forEach(function (file) {
    if (~file.indexOf('.js')) {
        require(models_path + '/' + file);
    }
});
