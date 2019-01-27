import React from 'react';
import { Player } from 'video-react';
import poster from '../../images/online_switch_poster.png';


const FeaturesItem = (props) => {
    if (props.id === 2) {
        return (
            <div className={"features-item features-item-" + props.id}>
                <Player
                    playsInline
                    poster={poster}
                    src={props.src} />
            </div>
        )
    } else {
        return (
            <div className={"features-item features-item-" + props.id}>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </div>
        )
    }
}

export default FeaturesItem;