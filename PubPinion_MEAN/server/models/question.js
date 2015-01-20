var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema( {
        question:  String,
        created_at: { type: Date, default: Date.now },
        hidden: Boolean,
    });

var Question = mongoose.model('Question', QuestionSchema);
