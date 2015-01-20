
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

var templatePath = path.normalize(__dirname + '/../server/mailer/templates');
var notifier = {
        service: 'postmark',
        APN: false,
        email: false, // true
        actions: ['comment'],
        tplPath: templatePath,
        key: 'POSTMARK_KEY',
        parseAppId: 'PARSE_APP_ID',
        parseApiKey: 'PARSE_MASTER_KEY'
    };

module.exports = {
    development: {
        db: 'mongodb://localhost/pubpinion_db',
        root: rootPath,
        notifier: notifier,
        app: {
            name: 'MEN Demo (dev)'
        }
    },
    test: {
        db: 'mongodb://localhost/test',
        root: rootPath,
        notifier: notifier,
        app: {
            name: 'MEN Demo (test)'
        }
    },
    production: {}
}
