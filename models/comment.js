const mongoose = require('mongoose');
const { timeStamp } = require('node:console');

const commentSchema = mongoose.Schema({
    text :{
        type : String,
        required : true
    },
    post_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',   // 👈 reference to Post model
        required: true
    }

},{
    timestamps:true
})

const commentModel = mongoose.model('commentSection',commentSchema);

module.exports = commentModel;