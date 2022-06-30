import express from 'express';
import { useState } from 'react';
import Comment from './Comment';
const Filter = require('bad-words');
import axios from 'axios';


//setup the defaults amd statesetters
const CommentEntry = () =>   {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const filter = new Filter();

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
                "comment": filter.clean(comment),
                "rating": rating,
            };

    axios.post("http://localhost:3000/createComment", sendComment)
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

