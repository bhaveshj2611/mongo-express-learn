const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment : {
        type: String,
        required : true
    },
    userEmail : {
        type: String,
    },

},{timestamps: true});

const Comment = new mongoose.model('Comment',commentSchema);
module.exports = Comment;