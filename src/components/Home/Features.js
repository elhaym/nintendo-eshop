import React from 'react';

import FeaturesItem from './FeaturesItem';

import '../../styles/features.css';
import '../../styles/responsive.features.css'
import '../../styles/main.css'
import '../../styles/responsive.main.css'

const features = [
    {
        id: 0,
        title: 'Jouez en ligne',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non massa rhoncus, egestas leo eu, interdum leo. Nunc eleifend, metus nec finibus cursus, neque sapien facilisis risus, quis luctus eros mauris ac arcu. Maecenas accumsan volutpat sapien et pharetra. Aenean hendrerit efficitur purus eu accumsan. Vivamus euismod lectus eget augue mattis, nec commodo velit fermentum. Mauris in tempor est.'
    },
    {
        id: 1,
        title: 'Nintendo Entertainment System',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non massa rhoncus, egestas leo eu, interdum leo. Nunc eleifend, metus nec finibus cursus, neque sapien facilisis risus, quis luctus eros mauris ac arcu. Maecenas accumsan volutpat sapien et pharetra. Aenean hendrerit efficitur purus eu accumsan. Vivamus euismod lectus eget augue mattis, nec commodo velit fermentum. Mauris in tempor est.'
    },
    ,
    {
        id: 2,
        title: 'Nintendo Switch Online - Promotional video',
        desc: 'A description',
        src: require('../../videos/online_switch_promo_1920x1080.mp4')
    },
    {
        id: 3,
        title: 'Vos données dans le Cloud',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non massa rhoncus, egestas leo eu, interdum leo. Nunc eleifend, metus nec finibus cursus, neque sapien facilisis risus, quis luctus eros mauris ac arcu. Maecenas accumsan volutpat sapien et pharetra. Aenean hendrerit efficitur purus eu accumsan. Vivamus euismod lectus eget augue mattis, nec commodo velit fermentum. Mauris in tempor est.'
    },
    {
        id: 4,
        title: 'Une application smartphone',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non massa rhoncus, egestas leo eu, interdum leo. Nunc eleifend, metus nec finibus cursus, neque sapien facilisis risus, quis luctus eros mauris ac arcu. Maecenas accumsan volutpat sapien et pharetra. Aenean hendrerit efficitur purus eu accumsan. Vivamus euismod lectus eget augue mattis, nec commodo velit fermentum. Mauris in tempor est.'
    }
];



export class Features extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="c-fsize">
                <div className="container features">
                    <div className="features-wrapper">
                        {
                            features.map((feature) => (
                                <FeaturesItem key={"features-item-" + feature.id} id={feature.id} title={feature.title} desc={feature.desc} src={feature.src} />
                            ))
                        }
                    </div>
                </div>
            </section>

        )
    }
}