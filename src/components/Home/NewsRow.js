import React from 'react';

const NewsRow = () => {
    const items = [{
        image: require('../../images/tv01.jpg'),
        title: "Mode téléviseur"
    },
    {
        image: require('../../images/table01.jpg'),
        title: "Mode sur table"
    },
    {
        image: require('../../images/hh01.jpg'),
        title: "Mode portable"
    },
    {
        title: "Info",
        info : "Trois modes de jeu"
    }
    ]

    const itemsList = items.map((item, i) => {
        const itemStyles = {
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 95%',
        }

        if (i === 3) {
            return (
                <div key={"row-item-" + JSON.stringify(i)} className={"row-item item-" + JSON.stringify(i)} style={itemStyles}>
                    <span>
                        <h1 className="cinfo">{item.info}</h1>
                    </span>
                </div>
            )
        } else {
            return (
                <div key={"row-item-" + JSON.stringify(i)} className={"row-item item-" + JSON.stringify(i)} style={itemStyles}>
                    <span className="title-canvas">
                        <h1 className="ctitle">{item.title}</h1>
                    </span>
                </div>
            )
        }

    }
    )

    return <div className="row-news">{itemsList} </div>

}

export default NewsRow;