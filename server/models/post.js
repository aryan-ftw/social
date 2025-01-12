const mongoose = require("mongoose");


const {ObjectId} = mongoose.Schema.Types


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        requird:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    },
    postedBy:{
        type :ObjectId,
        ref:"User"
    }
});
module.exports = mongoose.model("Post", postSchema)