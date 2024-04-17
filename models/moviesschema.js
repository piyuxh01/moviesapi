const mongoose = require("mongoose");
const moviesSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    year:{
        type:String,
        required:true,
        trim:true
    },
    runtime:{
        type:String,
        required:true,
        trim:true
    },
    genres: {
        type: [String],
        trim: true
    },
    director:{
        type:String,
        trim:true
    },
    actors:{
        type:String,
        trim:true
    },
    plot:{
        type:String,
        trim:true
    },
    posterurl:{
        type:String,
        trim:true
    }
})
module.exports = mongoose.model("movies",moviesSchema);