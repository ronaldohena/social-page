const express = require('express');
const { 
    userById, 
    allUsers, 
    singleUser, 
    updateUser, 
    deleteUser, 
    userPhoto,
    addFollowers,
    addFollowing,
    removeFollowing,
    removeFollowers
 }= require('../controllers/user');
const { requireSignin }= require('../controllers/auth');
const router = express.Router();

router.get('/users', allUsers);
router.get('/user/:userId',requireSignin, singleUser);
router.put('/user/:userId',requireSignin, updateUser);
router.delete('/user/:userId',requireSignin, deleteUser);
//photo
router.get("/user/photo/:userId", userPhoto)
//followers and following 
router.put ("/user/follow",requireSignin, addFollowing, addFollowers);
router.put ("/user/unfollow",requireSignin, removeFollowing, removeFollowers)

//any route contain userId and out app will fisrt execute userById()
router.param('userId', userById);



module.exports = router;