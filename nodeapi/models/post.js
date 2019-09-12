const mongoose = require('mongoose');
const ObjectID = mongoose.Schema.Types.ObjectId;


const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    postedBy: {
        type: ObjectID,
        ref: "User"
    },
    created: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", postSchema);