import React from 'react';
import LogoImage from '../logo.png';

function Logo() {
    return (
        <div>
            <img src={LogoImage} alt="Logo" style={{ pointerEvents: 'none' }} />
        </div>
    );
}

export default Logo;