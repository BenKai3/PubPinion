var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema( {
        question:  String,
        user_name: String, 
        user_mail: String,
        created_at: { type: Date, default: Date.now },
        hidden: Boolean,
        maybe: Boolean,
    });

QuestionSchema.path('user_name').required(true, 'User name cannot be blank');
QuestionSchema.path('user_mail').required(true, 'User email cannot be blank');
QuestionSchema.path('question').required(true, 'question cannot be blank');

var Question = mongoose.model('Question', QuestionSchema);
