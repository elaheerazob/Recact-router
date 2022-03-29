import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This is Header</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'about'}>About</Link>
            <Link to={'posts'}>Posts</Link>
            <Link to={'friends'}>Friends</Link>

        </div>
    );
};

export default Header;