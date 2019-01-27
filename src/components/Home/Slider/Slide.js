import React from 'react';

const Slide = (props) => {
    const slideStyles = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 15%'
    }

    return (
        <div className="slide" style={slideStyles}>
            <span>
                <h1 className="ctitle">{props.title}</h1>
                <p className="cstitle">{props.desc}</p>
            </span>
        </div>
    )
}


export default Slide;