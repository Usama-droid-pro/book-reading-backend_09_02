const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    category_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    image:{
       type: String
    } , 
    file:{
        type:String
    },
    rating:{
        type:String
    },
    paid:{
        type:Boolean
    }
    ,
    price:String,
    bookType: {
        type:String,
        enum:["audio" , "ebook"]
    },
    numberOfPages:Number,
    description:String,
    chapters:String,
    number_of_reads:Number,
    bookName:String,
    description:String,
    author_name:String,
    published_date:String,
    views:Number

    
})

module.exports = mongoose.model("book" , bookSchema);