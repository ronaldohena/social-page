const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
require('dotenv').config();

exports.signup =async (req, res) =>{
    const userExist = await User.findOne({ email: req.body.email})
    if (userExist) 
        return res.status(403).json({
            error: "Email is taken"
        })
    const user = await new User(req.body);
    await user.save();
    res.status(200).json({user});
}

exports.signin = (req, res ) =>{

    //find user based on email
     const { _id, name, email, password} = req.body;
     User.findOne({email}, (err, user) =>{
        //if error or no user
        if(err || !user) {
            return res.status(401).json({
                error: "User with that email doesnt exitst. Please signup!"
            })
        }
        //if user is found make sure for email and password match
        //create authenticated method in model and use here
        if(!user.authenticated(password)){
            return res.status(401).json({
                error: "Email and password do not match"
            })
        }

        //if user found , authenticate

        //generate a token With user id and sectet combinated
        const token = jwt.sign({_id: user.__id}, process.env.HWT_SECRET);
        //persist the token as 't' in cookie With expiry date
        res.cookie("t", token, {expire: new Date()+9999})
        //returt response With user and token to frontend client
        const { _id, name , email} = user;
        return res.json({token, user: {_id, email, name}})
     })
}

exports.signout = (req, res) =>{
    res.clearCookie("t")
    return res.json({
        message: "Signout succsess"
    })
}

exports.requireSignin = expressJwt({

    //if the token is valid , express jwt appends the verified users id,
    //in an auth key to the reuest object
    userProperty: "auth",
    secret: process.env.HWT_SECRET
})