const mongoose = require('mongoose');
const schema = mongoose.Schema;

const filmSchema = new schema(
    {
        filmName: {
            type: String,
            min: 1,
            required: [true, "Film name is required"]
        },
        releaseDate: {
            type: Date,
            required: [true, "Release date is required"]
        },
        runningTime: {
            type: String,
            min: 1,
            max: 1,
            required: [true, "Running time is required"]
        },
        directorName: {
            type: String,
            min: 5,
            required: [true, "Director name is required"]
        },
        cast: [
            {
                type: String,
                min: 5,
                required: [true, "Actor/actress name is required"]
            }
        ],
        classification: {
            type: String,
            min: 1,
            required: [true, "Classification is required"]
        },
        shortDescription: {
            type: String,
            min: 20,
            required: [true, "Short description is required"]
        },
        synopsis: {
            type: String,
            min: 100,
            required: [true, "Synopsis is required"]
        },
        image: {
            type: String,
            required: [true, "A picture of a film is required"]
        },
        comments: [
            {
                type: String
            },
        ]
    }
);

const Films = mongoose.model("Films", filmSchema);

module.exports = Films;