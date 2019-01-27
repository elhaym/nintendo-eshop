import React from 'react';

const playBtnStyles = {
    fontSize: '2.3em',
    textAlign: 'center', /* centrage horizontal */
    color: '#ffffff'
}

const PlayButton = (props) => {
    return (
        <div className="playButton" onClick={props.displayTrailer}>
            <i className="far fa-play-circle" style={playBtnStyles}></i>
        </div>
    )
}

export default PlayButton;
