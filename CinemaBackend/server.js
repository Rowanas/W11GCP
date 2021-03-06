const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const filmRouter = require('./Routes/FilmRouter');
const commentRouter = require('./Routes/CommentRouter');
const PORT = process.env.PORT || 3000;
const DATABASE = 'test';
const DB_URI = `mongodb://localhost:27017/${DATABASE}`;

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/film", filmRouter);
app.use("/comment", commentRouter);

app.use(function (error, request, response, next) {
    if (error.name === "ValidationError") error.statusCode = 400;

    response.status(error.statusCode || 500)
        .send(error.message || "Something went wrong");
});

function main() {
    mongoose.connect(DB_URI, {}, function (err) {
        if (err) {
            throw err; 
        } else {
            console.log("Connected to database");
            app.listen(PORT, () => console.log("Up and running)"));
        }
    });
}

main();