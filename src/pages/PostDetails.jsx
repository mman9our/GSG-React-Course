import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { PostContext } from '../Context/PostContext';

function PostDetails() {
    const { postId } = useParams();
    const postsData = useContext(PostContext)
    const post = postsData.find((p) => {
        return p.id == postId;
    })
    return (
        <><h1>PostDetails</h1>
            <h3>{post.title}</h3>
            <h3>{post.body}</h3>
        </>
    )
}

export default PostDetails