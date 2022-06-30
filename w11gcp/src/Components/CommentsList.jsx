import Comment from "./Comment";

const CommentsList = () =>  {

    const commentArray = [

    ]

return (
    <>
        {
            commentArray.map((comment) =>  {
                return <Comment data = {comment}/>
            })
        }
    </>
);
}