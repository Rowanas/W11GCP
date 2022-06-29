import express from 'express';
import { useState } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText} from reactStrap;
import Comment from './Comment';
const Profanity = require('bad-words');

//setup the defaults amd statesetters
const CommentEntry = (commentFilled) =>   {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    profanity = new Profanity();

    //a spot of validation, just in case, since we talked to Morgan about it.
    const commentValid = () =>  {
        if (title === "" || comment === "" || rating === "")    {
            return false;
        }
        return true
    }

    const postComment = () =>   {
        if (commentValid()) {
            const sendComment = {
                "title": title,
                "comment": profanity.clean(comment),
                "rating": rating,
            };

    axios.post("http://localhost:8080/createComment", sendComment)
            .then((response) => {
                console.log(response);
            })
            .catch((error) =>  {
                console.error(error.message);
            });

//resets form after submission
            setTitle("");
            setComment("");
            setRating("");
        }
    }
}

export default CommentEntry

