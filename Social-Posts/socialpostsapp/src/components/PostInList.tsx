//has prop named post that accepts a Post object
//has callback prop named onDelete that takes no arguments

import { Post } from "../interfaces/Post";

interface PostInListProps{
    post: Post;
}

function onDelete(){
    // setPosts(posts.filter((x) => x.post));
    //is called when trash button is clicked
}

export function PostInList(props:PostInListProps){
    return(
        <div className="Post">
            <h2>{props.post.title}</h2>
            <p>{props.post.thought}</p>
            <button onClick={onDelete}><span className="material-symbols-outlined"> delete</span></button>
        </div>
    )
}