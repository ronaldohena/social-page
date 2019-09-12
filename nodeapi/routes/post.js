const express = require('express');
const {
    getPost, 
    createPost, 
    postsByUser, 
    postById,
    isPoster,
    deletePost, 
    updatePost
} = require('../controllers/post');
//const {createPostValidator} = require('../validator');
const { requireSignin } = require('../controllers/auth')
const { userById }= require('../controllers/user');


const router = express.Router();

router.get("/posts", getPost);
router.post("/post/new/:userId", requireSignin, createPost);
router.get("/posts/by/:userId",requireSignin, postsByUser);
router.delete('/post/:postId',requireSignin, isPoster, updatePost);
router.put('/post/:postId',requireSignin, isPoster, deletePost);


//any route contain userId and out app will fisrt execute userById()
router.param('userId', userById);
//any route contain postId and out app will fisrt execute postById()
router.param('postId', postById);

module.exports = router;  

