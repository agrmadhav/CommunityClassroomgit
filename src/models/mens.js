const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    dob:{
        type:Date,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true,
        trim:true
    },
    score:{
        type:Number,
        required:true,
        trim:true
    },
    event:{
        type:String,
        default:"100m"
    },
})
//creating a collection
const MensRanking = new mongoose.model("MensRanking", menSchema);

module.exports = MensRanking