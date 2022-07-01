const express = require('express');
const Film = require('../Models/Films');

const Router = express.Router();

Router.get('/getAll', async (request, response, next) => {
    try {
        response.contentType("application/json")
            .status(200)
            .json(await Film.find().populate());
    } catch (err) {
        next(err);
    }
});

Router.get('/getFilmById/:id', async (request, response, next) => {
    try {
        const id = request.params.id;
    
        const film = await Film.findById(id);
        
        if (film) {
            response.status(200).json(film);
        } else {
            next({ statusCode: 404, message: `Film with id ${request.params.id} does not exist` });
        }
        
    } catch (err) {
        next(err);
    }
});

Router.post('/createFilm', async (request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next({
            statusCode: 400,
            message: "Body cannot be empty"
        });

        const film = new Film(request.body);
        await film.save();

        response.status(201).json(film);
    } catch (err) {
        next(err);
    }
});

Router.put('/updateFilm/:id', async (request, response, next) => {
    try {
        if (Object.keys(request.body).length == 0) return next({
            statusCode: 400,
            message: "Body cannot be empty"
        });
        // your try and catch would have to catch a validation
        // change the top using express validator

        const film = await Film.updateOne({ _id: request.params.id }, request.body, {
            runValidators: true, new: true
        });
        

        if (film) {
            response.status(202).json(film);
        } else {
            next({ statusCode: 404, message: `Film with id ${request.params.id} does not exist` });
        }
    } catch (err) {
        next(err);
    }
});

Router.delete('/deleteFilm/:id', async (request, response, next) => {
    try {
        const id = request.params.id;
    
        const film = await Film.findByIdAndDelete(id);
    
        if (film) {
            response.status(204).json(film);
        } else {
            next({ statusCode: 404, message: `Film with id ${request.params.id} does not exist` });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = Router;