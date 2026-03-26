const expree = require('express');
const {handleCreatePost , handleGetPost ,
    handleGetIndiPost,
    handleLike,handleUnlike,
    handleCreateComment,
    handleGetComments,
    handleUpdateComment
} = require('../controllers/posts')
const route = expree.Router();

route.post('/create',handleCreatePost)

route.get('/show',handleGetPost);

route.get('/show/:Postid',handleGetIndiPost);

route.patch('/:Postid/like',handleLike);

route.patch('/:Postid/unlike',handleUnlike);

route.post('/:Postid/comment',handleCreateComment);


route.patch('/:Commentid/comment',handleUpdateComment);

route.get('/:Postid/getcomments',handleGetComments);

module.exports = route;