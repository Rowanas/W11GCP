import {Label, Form, Container, Row, Column, Button} from "reactstrap";
import CommentEntry from "./CommentEntry";

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
    );
}
 
export default CommentsComp;