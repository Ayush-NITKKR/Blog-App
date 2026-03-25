const expree = require('express');
const {handleCreatePost , handleGetPost ,handleGetIndiPost} = require('../controllers/posts')
const route = expree.Router();

route.post('/create',handleCreatePost)

route.get('/show',handleGetPost);

route.get('/show/:Postid',handleGetIndiPost);

module.exports = route;