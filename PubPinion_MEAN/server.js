var express = require('express.io');
// var express = require('express');

var path = require('path');
var app = express().http().io();
// var app = express();

app.configure(function() {

    // var cookieParser = require('cookie-parser');
    app.use(express.cookieParser());

    // app.use(express.session( { secret: 'ninja' }));

    // var bodyParser = require('body-parser');
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // uncomment after placing your favicon in /public
    //app.use(favicon(__dirname + '/public/favicon.ico'));

    app.use(express.static(path.join(__dirname, 'public')));

    app.set('views', path.join(__dirname, 'server/views'));
    app.set('view engine', 'ejs');
    
});

var debug = require('debug')('mvc_template_Martin');

var mongoose = require('./config/mongoose');
var routes = require('./config/routes')(app);

app.set('port', process.env.PORT || 6789);

app.listen(app.get('port'), function() {
    console.log('\n ***************************************************');
    console.log('*****                                           *****');
    console.log('*****   Express server listening on port ' + app.get('port') + '   *****');
    console.log('*****                                           *****');
    console.log(' ***************************************************\n');
});