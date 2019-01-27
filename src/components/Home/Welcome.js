import React from 'react';
import '../../styles/welcome.css';

const iconStyles = {
    position: 'absolute',
    bottom: '68.7%',
    right: '28%',
    width: '5%'
}


const Welcome = () => {
    return (
        <div className="welcome">
            <div className="welcome-wrapper">
                <h1>Welcome to</h1>
                <h2>Nintendo <span>eShop</span></h2>
               { /** <img src={require('../../images/hat2.png')} style={iconStyles} className="mv" /> */ }
            </div>
        </div>
    )
}

export default Welcome;