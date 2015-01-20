var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema( {
        name:  String,
        email: String,
        created_at: { type: Date, default: Date.now },
        password: String,
        password_confirm: String,
        hidden: Boolean,
    });

UserSchema.path('name').required(true, 'User name cannot be blank');
UserSchema.path('email').required(true, 'User email cannot be blank');
UserSchema.path('password').required(true, 'The Password field cannot be blank');
UserSchema.path('password_confirm').required(true, 'Password Confirmation cannot be blank');

var User = mongoose.model('User', UserSchema);
