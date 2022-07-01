const CommentsList = ({ props }) => {

    return (
        <div className="comment" key={props._id}>
            <h3 className="commentTitle">{props.title}</h3>
            <p className="commentTitle">{props.comment}</p>
            <p>Rating:{props.Rating}</p>
        </div>
    )
}


export default CommentsList;