import React from 'react';

import FeaturesInfo from '../Home/FeaturesInfo';
import PlayButton from '../Home/Trailer/PlayButton';

import '../../styles/dividers.css';


export class MiddleDivider extends React.Component {
    render() {
        return (
            <div className="middle-divider">
            <FeaturesInfo />
                <div className="hero">
                </div>
                <h1>Fire Emblem Three Houses</h1>
                <h5>Sortie prévue pour le printemps 2019</h5>
                <PlayButton displayTrailer={this.props.displayTrailer} />
                <p>Voir la bande-annonce</p>
            </div>
        )
    }
}