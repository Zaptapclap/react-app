import React from 'react';
import { Link } from "react-router-dom";

const TopBar = () => {
    
    const navStyle = {
        color: "white"
    };

    const titleStyle = {
        color: "grey"
    };

    return (
        <nav>
            <h3 className="ubuntu-font" style={titleStyle}>Navigation</h3>
            <ul className="nav-links">
                <Link to="/" style={navStyle}>
                    <li>Home</li>
                </Link>
                <Link to="/source" style={navStyle}>
                    <li>Source</li>
                </Link>
            </ul>
        </nav>
    );
};

export default TopBar;