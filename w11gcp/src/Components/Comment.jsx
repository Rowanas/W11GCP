const Comment = ({data}) => {

    const { comment } = data

    return (
        <>
        <h3>{comment.title}</h3>
        <p>{comment.comment}</p>
        <h2>{comment.rating.toString()}</h2>
        </> 
    );
}
 
export default Comment;