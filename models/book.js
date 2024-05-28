const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title:{
        required:true,
        type:String
    },
    author:{
        required:true,
        type:String
    },
    summary:{
        required:true,
        type:String
    },
    price:{
        required:true,
        type:Number
    }
});


const BookModel = mongoose.model('BookModel',bookSchema);

module.exports = BookModel;
