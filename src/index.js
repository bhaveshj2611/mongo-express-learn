const express = require("express");
const connect = require("./config/database");

const Tweet = require("./models/tweet");
const TweetRepo = require("./repository/tweet-repo");
const Comment = require('./models/comment');

const app = express();

app.listen(3000,async()=>{
    console.log("Server Started at 3000");
    await connect();
    console.log("MongoDB connected");

    // const tweet = await Tweet.create({
    //     tweet: 'Second Tweet',
        
    // });

    // const tweet = await Tweet.find({tweet: 'First Tweet'});
    // const tweet = await Tweet.find();

    // const tweet = await Tweet.findById('66c4d97486be32eb401a2840')
    // tweet.userEmail = 'bhaijaan@gmail.com';
    // await tweet.save();

    const tweetRepo = new TweetRepo();
    // const tweet = await tweetRepo.create({
    //     tweet: "Hey there",
    //     userEmail: "kj@gmail.com"
        
    // })

    // const tweet = await tweetRepo.update('66c6ad0ed92e795708590a1b',{
    //     tweet: "Hey there, this one is updated",
    //     userEmail: "kj@gmail.com"
        
    // })

    // COMMENT WITHOUT COMMENT SCHEMA
    // const tweet = await tweetRepo.create({tweet: "tweet with comment"});
    // tweet.comments.push({comment : "first comment"});
    // await tweet.save();

    //COMMENT WITH COMMENT SCHEMAS
    // const tweet = await tweetRepo.create({tweet: "tweet with comment and its schema"});
    // const comment = await Comment.create({comment: "comment on schema"});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.getWithComments('66c77dcae778e9fc378beea3')

    // const tweet = await tweetRepo.getAll(0,2);
    


    const tweet = await tweetRepo.create({tweet: "tweet with comment and its schema", userEmail: "kj@gmail.com"});
    const comment = await Comment.create({comment: "comment on schema"});
    tweet.comments.push(comment);
    await tweet.save();

    console.log(tweet);


    // // console.log(tweet[0].id);
    // console.log(tweet.commentCount);
    // console.log(tweet.tweetDetail);



});

