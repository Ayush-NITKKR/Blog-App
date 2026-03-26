const { error } = require('node:console');
const postModel = require('../models/post');


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
        
    }
    
}
module.exports = {
    handleCreatePost,
    handleGetPost,
    handleGetIndiPost,
    handleLike,
    handleUnlike
}