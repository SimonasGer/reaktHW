import "./comment.scss"

function Comment(props){
    return(
        <div className="comment">
            <div><img src="https://dummyimage.com/50x50/ced4da/6c757d.jpg" alt="..." /></div>
            <div className="contents">
                <div>{props.name}</div>
                {props.content}
            </div>
        </div>
    )
}

export default Comment