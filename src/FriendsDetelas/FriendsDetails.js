import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendsDetails = () => {
    const {friendId} =useParams();
    const [friend,setFrind] =useState({});
    useEffect(() =>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res =>res.json())
        .then(data =>setFrind(data))
    } ,[])
    return (
        <div>
            <h1>This is bondhu Details: {friendId}</h1>
            <h3>Name: {friend.name}</h3>
            <p>email:{friend.email}</p>
            <p>address:{friend.address?.city}</p>
            <p>username:{friend.username}</p>
        </div>
    );
};

export default FriendsDetails;