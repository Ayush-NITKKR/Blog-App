const expree = require('express');
const {handleCreatePost} = require('../controllers/posts')
const route = expree.Router();

route.post('/create',handleCreatePost)

module.exports = route;