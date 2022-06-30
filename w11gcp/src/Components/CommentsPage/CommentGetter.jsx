import { useEffect, useState } from "react";
import axios from "axios";
import CommentsList from "./CommentsList";

const CommentGetter = () => {
    const [comments, setComments] = useState([]);
    const URL = "http://localhost:3000/getAllComments";

    useEffect(() => {
        getAllComments();
    }, []);

    const getAllComments = () => {
        axios.get(`${URL}/getAll`)
        .then((response) => {
            const allComments = response.data
            setComments(allComments);
            console.log(allComments);
        })
        .catch(error => console.error(`Error: ${error}`));
    }

    return ( 
        <>
            {comments.map(comment =>
                <CommentsList props={comment}/>)}
        </>
    );
}
 
export default CommentGetter;