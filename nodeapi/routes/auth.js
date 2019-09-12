const express = require('express');
const {signup, signin, signout} = require('../controllers/auth');
//const {userSignupValidator} = require('../validator');
const { userById }= require('../controllers/user');

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signout);

//any route contain userId and out app will fisrt execute userById()
router.param('userId', userById);

module.exports = router;