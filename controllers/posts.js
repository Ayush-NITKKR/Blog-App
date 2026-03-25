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

module.exports = {
    handleCreatePost
}