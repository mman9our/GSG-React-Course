import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PostContext } from '../Context/PostContext';

function PostsList() {
    const postData = useContext(PostContext);

    const psotList = postData.map((post) => {
        return (
            <Link key={post.id} to={`/postDetails/${post.id}`}>
                <div style={{ background: "teal", padding: "20px", color: "white", marginTop: "10px" }}>
                    <h1>{post.title}</h1>
                </div>
            </Link>
        )
    })
    return (
        <>
            {psotList}
        </>
    )
}

export default PostsList;