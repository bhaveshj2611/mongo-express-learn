// const Comment = require("../models/comment");

// class CommentRepo{
//     async create(data){
//         try {
//             const comment = await Comment.create(data);
//             return comment;
//         } catch (error) {
//             console.log(error);
//         }
//     } 

//     async get(id){
//         try {
//             const tweet = await Tweet.findById(id);
//             return tweet;
//         } catch (error) {
//             console.log(error);
//         }
//     } 

//     async update(id,data){
//         try {
//             const tweet = await Tweet.findByIdAndUpdate(id,data,{new:true});
//             return tweet;
//         } catch (error) {
//             console.log(error);
//         }
//     } 


//     async delete(id){
//         try {
//             const tweet = await Tweet.findByIdAndRemove(id);
//             return tweet;
//         } catch (error) {
//             console.log(error);
//         }
//     } 


// }

// module.exports = TweetRepo;