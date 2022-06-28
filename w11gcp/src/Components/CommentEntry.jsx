import express from 'express';
import { useState } from 'react';
import {Col, Button, Form, FormGroup, Label, Input, FormText} from reactStrap;
import * from CommentRouter;

//setup the defaults amd statesetters
const CommentEntry = ({commentSubmit}) =>   {
    const [title, setTitle] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
}

//a spot of validation, just in case, since we talked to Morgan about it.
const CommentValid = () =>  {
    if (title === "" || comment === "" || rating === "")    {
        return false;
    }
    return true
}

const Comment