const mongoose = require('mongoose');
const { type } = require('node:os');

const postSchema = mongoose.Schema({
    text : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },
    like : {
        type : Number,
        default : 0
    }
},
{
    timestamps: true
})

const postModel = mongoose.model('post',postSchema);


module.exports = postModel;