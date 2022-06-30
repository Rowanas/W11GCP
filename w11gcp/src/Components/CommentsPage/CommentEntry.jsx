import express from 'express';
import { useState } from 'react';
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
//input form with button
const CommentsComp = ({setTitle, setComment, setRating}) => {
    return (
    <>
        <Form>
            <input type="text" id="title" className="form-control" name="title" placeholder="Movie title"
                onChange={(event) => setTitle(event.target.value)}/>
            <input type="text" id="comment" className="form-control" name="comment" placeholder="Enter comment here"
                onChange={(event) => setComment(event.target.value)}/>
            <input type="number" id="rating" className="form-control" name="rating" placeholder="Enter rating number, 1-5"
                onChange={(event) => setRating(event.target.value)}/>
            <Button onClick={CommentEntry}>Submit Comment</Button>
        </Form>
    </>
    )
    }
}
}

export default CommentEntry;
