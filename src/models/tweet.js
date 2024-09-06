const mongoose = require("mongoose");
const tweetSchema = new mongoose.Schema({
    tweet : {
        type: String,
        require : true
    },
    userEmail : {
        type: String,
    },
    comments: [
        // {
        //     comment_content : {
        //         type: String,
        //         required : true,
        //     }
        // }

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

},{timestamps: true});

//In Mongoose, a virtual is a property that is not stored in the database, but is instead computed on the fly when a document is retrieved or saved.
tweetSchema.virtual('commentCount').get(function(){
    return this.comments.length;
});

tweetSchema.virtual('tweetDetail').get(function(){
    return `${this.tweet}  " by " ${this.userEmail}`;
});

//Middleware(Hooks) in mongoose allow you to perform additional logic before or after a document is saved, updated, or removed from the database.
//types of hooks are pre, post, pre-remove, post-remove etc

tweetSchema.pre('save', async function(next){
    console.log("Before Save");
    this.tweet = this.tweet + "...";
    
    next();
})



const Tweet = new mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;