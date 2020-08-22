import React from 'react';
import Post from "./Post";

const Posts = ({posts}) => {
    if (!posts.length) {
        return <p className="text-center">Постов нет</p>
    }
    return <div className="wrap-cards">{posts.map(post => <Post post={post} key={post}/>)}</div>


}

export default Posts;