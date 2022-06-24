const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
    {
    title:    {
        type: String,
        min: 1,
        required: [true, "Please enter a comment title"]
    },
    comment:    {
        type: String,
        min: 1,
        max: [140, "Comments must be less than 140 characters"]
    },
    rating: {
        type: Number,
        min:[1, "Please enter a rating between 1 and 5"],
        max:[5, "Please enter a rating between 1 and 5"]
    }
    }
)