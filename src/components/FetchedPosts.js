import React from 'react';
import Post from "./Posts/Post";

const FetchedPosts = ({posts}) => {
    if (!posts.length) {
        return <button className="btn btn-primary">Загрузить</button>
    }
    return <div className="wrap-cards">{posts.map(post => <Post post={post} key={post}/>)}</div>
}

export default FetchedPosts;