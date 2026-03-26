const expree = require('express');
const {handleCreatePost , handleGetPost ,handleGetIndiPost,handleLike,handleUnlike} = require('../controllers/posts')
const route = expree.Router();

route.post('/create',handleCreatePost)

route.get('/show',handleGetPost);

route.get('/show/:Postid',handleGetIndiPost);

route.patch('/:Postid/like',handleLike);

route.patch('/:Postid/unlike',handleUnlike)
module.exports = route;