import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook
import './TopMenu.css'; // Import the CSS file for styles

const TopMenu = () => {
    const location = useLocation(); // Get the current location

    // Function to determine if a menu item is active based on its path
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="top-menu">
            <div className={`top-menu-item ${isActive('/') ? 'active' : ''}`}>
                <a href="/">Home</a>
            </div>
            <div className={`top-menu-item ${isActive('/about') ? 'active' : ''}`}>
                <a href="/about">About</a>
            </div>
            {/* Add more menu items as needed */}
        </div>
    );
};

export default TopMenu;