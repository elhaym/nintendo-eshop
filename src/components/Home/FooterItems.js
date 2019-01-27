import React from 'react';



const FooterItems = (props) => {
    const itemStyle = {
        backgroundImage: `url(${props.image})`
    }
    return (
        <div className="footer-items-list">
            <div className={"footer-item footer-item-" + JSON.stringify(props.i)}
                style={itemStyle}>
                <span>
                    <a href={props.href}>{props.desc}</a>
                </span>
            </div>
        </div>
    )


}

export default FooterItems;