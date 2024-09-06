const mongoose = require("mongoose");

const connect = async() =>{
    await mongoose.connect("mongodb+srv://bhaveshjoshi2611:RXr1tt7TURpwmd5w@cluster0.sl3cqw9.mongodb.net/mongo_exp");
}

module.exports = connect;