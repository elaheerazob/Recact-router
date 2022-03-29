import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [posts,setPosts] =useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res =>res.json())
        .then(data =>setPosts(data))
    } ,[])
    return (
        <div>
            <h1>facebook post :{posts.length}</h1>
        </div>
    );
};

export default Posts;