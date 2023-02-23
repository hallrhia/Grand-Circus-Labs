
//when "new thought" button is click show postform
//when postform submitted add to list of posts and stop displaying postform

import { useState } from "react"
import { Post } from "../interfaces/Post"
import { PostForm } from "./PostForm";
import { PostInList } from "./PostInList";

export function SocialPosts(){
    const [posts, setPosts] = useState<Post[]>(
        [{title: "post one", thought: "here is post one"},
        {title: "post two", thought: "post two is next"},
        {title: "post three", thought: "thus completes the trilogy"},]
    );

function addPost(post:Post){
    setPosts([...posts, post]);
}

    return(
        <div className="SocialPosts">
            <PostForm addPost={addPost}/>
            { posts.map((post) => <PostInList post={post} />)}
        </div>
    )
}