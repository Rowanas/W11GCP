const express = require('express');
const Comment = require('../Models/Comments');


const Router = express.Router();

Router.get('/getAllComments', async (request, response, next) => {

    try {
        response.contentType("application/json")
            .status(200)
            .json(await Comment.find().populate());

    } catch (error) {
        next(error);
    }
});

Router.get('/getCommentById/:id', async (request, response, next) => {

    try {
        const id = request.params.id;
    
        const comment = await Comment.findById(id);
        
        if (comment) {
            response.status(200).json(comment);
        } else {
            next({ statusCode: 404, message: `Comment with id ${request.params.id} does not exist` });
        }
    } catch (error) {
        next(error);
    }
});

Router.post('/createComment', async (request, response, next) => {

    try {
        if (Object.keys(request.body).length == 0) return next({
            statusCode: 400,
            message: "Body cannot be empty"
        });

        const comment = new Comment(request.body);
        await comment.save();

        response.status(201).json(comment);

    } catch (error) {
        next(error);
    }
});

Router.delete('/deleteComment/:id', async (request, response, next) => {
    try {
        const id = request.params.id;
    
        const comment = await Comment.findByIdAndDelete(id);
    
        if (comment) {
            response.status(204).json(comment);
        } else {
            next({ statusCode: 404, message: `Comment with id ${request.params.id} does not exist` });
        }
    } catch (error) {
        next(error);
    }
});

module.exports = Router;

