import React from 'react';

const closeBtnStyles = {
    fontSize: '1.2em',
    textAlign: 'center', /* centrage horizontal */
    color: '#ffffff'
}

const CloseButton = (props) => {
    return (
        <div className="close-button" onClick={props.closeTrailer}>
            <i className="fas fa-times" style={closeBtnStyles}></i>
        </div>
    )
}

export default CloseButton;
