const { error } = require('node:console');
const postModel = require('../models/post');
const commentModel = require('../models/comment');


async function handleCreatePost(req,res) {
        const {text , title} = req.body;


    try {
        if (!text || !title) {
                throw new Error("No entry");
            }
        const x = await postModel.create({
            text,
            title
        })
        
        res.status(200).json({
            success : true,
            data : req.body,
            message: ' New entry is created'
        })

    } catch (error) {
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
    
}
async function handleGetPost(req, res) {

    try {
        
        const data =await postModel.find({});

        res.status(200).json({
            success: true,
            data:data,
            message:"ALl the entrys are shown"
        })
    } catch (error) {
         res.status(500).json({
            success : false,
            message: error.message
        })
    }
    
}
async function handleGetIndiPost(req, res) {
    try {
        const data = await postModel.findById(req.params.Postid);
        res.status(200).json({
            success: true,
            data:data,
            message:"the entrys are shown"
        })

        
    } catch (error) {
         res.status(500).json({
            success : false,
            message: error.message
        })       
    }
}
async function handleLike(req, res) {
    try {

        const post_id = req.params.Postid;

        const updatedPost = await postModel.findByIdAndUpdate(post_id,
            { $inc: { like: 1 } },   // 👈 increment safely
            { new: true }
        )
        if(!updatedPost){
            res.status(404).json({
                success: false,
                message:"Not found"
            })
        }
        res.status(200).json({
                success: true,
                data:updatedPost,
                message:"Post is liked successfully",
        })
        
    } catch (error) {
          res.status(500).json({
            success : false,
            message: error.message
        })   
    }
    
}
async function handleUnlike(req, res) {
    try {
        const post_id = req.params.Postid;

        const updatedPost = await postModel.findByIdAndUpdate(post_id,
            { $inc: { like:  -1 } },   // 👈 increment safely
            { new: true }
        )
        res.status(200).json({
                success: true,
                data:updatedPost,
                message:"Post is Unliked successfully",
        })
    } catch (error) {
          res.status(500).json({
            success : false,
            message: error.message
        })
    }
    
}
async function handleCreateComment(req,res) {

    try {
        const post_id = req.params.Postid;

        const {text} = req.body;

        if(!post_id || !text){
           return res.status(400).json({
                success:false,
                message:"No entry"
            })
        }

        const updatedPost =await commentModel.create({
            text,
            post_id
        })
        res.status(200).json({
                success: true,
                data:updatedPost,
                message:"Comment is added successfully",
        })
    } catch (error) {
          res.status(500).json({
            success : false,
            message: error.message
        })
    }
    
}
async function handleUpdateComment(req,res) {

    try {
        const comment_id = req.params.Commentid;

        const {text} = req.body;

        if(!comment_id || !text){
           return res.status(400).json({
                success:false,
                message:"No entry"
            })
        }

        const updatedComment =await commentModel.findByIdAndUpdate(comment_id,{
            text
        })
        res.status(200).json({
                success: true,
                data:updatedComment,
                message:"Comment is  Updated successfully",
        })
    } catch (error) {
          res.status(500).json({
            success : updatedComment,
            message: error.message
        })
    }
    
}
async function handleGetComments(req,res) {

    try {
        const post_id = req.params.Postid;


        if(!post_id){
           return res.status(400).json({
                success:false,
                message:"No entry"
            })
        }

        const comments = await commentModel.find({
    post_id
});
        res.status(200).json({
                success: true,
                data:comments,
                message:"comment are show successfully",
        })
    } catch (error) {
          res.status(500).json({
            success : false,
            message: error.message
        })
    }
    
}
module.exports = {
    handleCreatePost,
    handleGetPost,
    handleGetIndiPost,
    handleLike,
    handleUnlike,
    handleCreateComment,
    handleGetComments,
    handleUpdateComment
}