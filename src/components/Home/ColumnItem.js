import React from 'react';

const ColumnItem = ({ image, title, desc, cat, link, id }) => {
    const colStyles = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 15%'
    };
    const catStyles = {
        textTransform : "uppercase",
        fontSize: "0.8em"
    };
    if (id === 0) {
        return (
            <div className={"col-h-news item-col-" + id} style={colStyles}>
                <span>
                    <p className="cstitle" style={catStyles}>{cat}</p>
                    <h1 className="ctitle">{title}</h1>
                    <p className="cstitle">{desc}</p>
                </span>
            </div>
        )
    } else {
        return (
            <div className={"col-v-news item-col-" + id} style={colStyles}>
                <span>
                    <p className="cstitle" style={catStyles}>{cat}</p>
                    <h1 className="ctitle">{title}</h1>
                    <a href={link} className="cstitle">{desc}</a>
                </span>
            </div>
        )
    }
}


export default ColumnItem;