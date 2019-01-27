import React from 'react';
import ColumnItem from './ColumnItem';
import posed, { PoseGroup } from 'react-pose';

const ItemColumn = posed.div({
    enter: {
        y: 0,
        opacity: 1,
        delay: 500,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
    },
    exit: {
        y: 50,
        opacity: 0,
        transition: { duration: 150 }
    }
})

export class NewsColumn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            images: [
                require('../../images/notv.jpg'),
                require('../../images/pokego2.jpg'),
                require('../../images/octo2.jpg'),
                require('../../images/ssbu-col.jpg')
            ],
            title: [
                "Jouez où que vous soyez",
                "Rendez-vous à Kanto pour tous les capturer",
                "Vivez 8 histoires oniriques de 8 aventuriers",
                "Le plus gros roster de l'histoire de la série"
            ],
            desc: [
                "Profitez de l'expérience de votre console de salon sans votre téléviseur",
                "Plus d'informations →",
                "Plus d'informations →",
                "Plus d'informations →"
            ],
            cat: [
                "Nintendo Switch",
                "Pokémon : Let's go, Pikachu !",
                "Octopath Traveler",
                "Super Smash Bros Ultimate"
            ],
            link: [
                "",
                "pokemon-lets-go",
                "octopath-traveler",
                "ssb-ultimate"
            ],
            index: [0, 1, 2, 3]
        }
    }

    displayOnScroll = () => {
    }

    componentDidMount() {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }
    componentWillMount() {

    }

    render() {
        return (
            <PoseGroup>
                {this.state.isVisible && [
                    <ItemColumn key="itemcolumn" className="itemcolumn" pose="y">
                        <div className="col-it-news">
                            <div className="col-it-news-wrapper">
                                {
                                    this.state.images.map((image, i) => (
                                        <ColumnItem
                                            key={i}
                                            image={image}
                                            title={this.state.title[i]}
                                            desc={this.state.desc[i]}
                                            link={this.state.link[i]}
                                            cat={this.state.cat[i]}
                                            id={this.state.index[i]} />
                                    ))
                                }
                            </div>
                        </div>
                    </ItemColumn>
                ]}
            </PoseGroup>
        )
    }
}
