import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalNavbar(props) {
    return (
        <div style={{ display: 'flow-root' }}>
            <Link to="/" style={{ float: 'left' }}>Home</Link>
            <div  style={{ float: 'right' }}>Search: <input type="text" size="20" /></div>
        </div>
    )
} 