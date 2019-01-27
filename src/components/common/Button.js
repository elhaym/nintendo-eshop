import React from 'react';

const Button = (props) => {
    return (
    <button className={props.style} onClick={props.handleClick} type="button">{props.text}</button>
    )
}

export default Button;