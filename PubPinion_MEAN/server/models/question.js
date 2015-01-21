var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema( {
        question:  String,
        user_id: String, 
        created_at: { type: Date, default: Date.now },
        yes: Number,
        no: Number,
        maybe: Boolean,
        image: Buffer,
    });

var Question = mongoose.model('Question', QuestionSchema);
