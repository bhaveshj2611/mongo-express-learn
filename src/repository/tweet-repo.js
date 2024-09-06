const Tweet = require("../models/tweet");

class TweetRepo{
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 

    async getWithComments(id){
        try {
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
            //lean() Returns a plain JavaScript object instead of a Mongoose document.
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id,data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 


    async delete(id){
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().limit(limit).skip(offset);
            // offset: The number of tweets to skip from the beginning of the list.
            //limit: The maximum number of tweets to return.
            return tweet;
        } catch (error) {
            console.log(error);
        }
    } 


}

module.exports = TweetRepo;