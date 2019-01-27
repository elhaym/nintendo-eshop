import React from 'react';
import Slide from './Slider/Slide';
import LeftArrow from './Slider/LeftArrow';
import RightArrow from './Slider/RightArrow';
import '../../styles/slider.css';

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.reloadSlider = this.reloadSlider.bind(this);
        this.state = {
            images: [
                require('../../images/bgi.jpg'),
                require('../../images/bgx.jpg'),
                require('../../images/bgs.jpg')
            ],
            title: [
                'Super Smash Bros. Ultimate',
                'The Legend of Zelda : Breath Of The Wild',
                'Final Fantasy XII : The Zodiac Age'
            ],
            desc: [
                'Des mondes et des combattants légendaires se retrouvent pour l’affrontement ultime dans le nouveau jeu Super Smash Bros. sur Nintendo Switch !',
                'Entrez dans un monde de découverte, d\'exploration et d\'aventure avec The Legend of Zelda: Breath of the Wild qui bouleverse la série à succès.',
                'Imposez-vous sur le court avec vos personnages préférés à travers d\'intenses matchs de tennis dans Mario Tennis Aces sur Nintendo Switch !'
            ],
            currentIndex: 0,
            translateValue: 0
        }
    }

    /**
     * @description Allows to go back to the slider's previous slide
     * @returns null after testing if our array's current index value === 0 
     */
    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
            return null;
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + this.slideWidth()
        }));
    }

    /**
     * @description Allows to go back to the slider's previous slide
     * @returns null after testing if our array's current index value === 0 
     */
    goToNextSlide = () => {
        if (this.state.currentIndex === this.state.images.length - 1) {
            return (
                this.setState({
                    currentIndex: 0,
                    translateValue: 0
                })
            )
        }
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        })
        );
    }

    /**
     * @description Get browser's current window size
     * @returns width value from our browser's window
     */
    slideWidth = () => {
        return document.querySelector('.slide').clientWidth;
    }

    /**
     * @description Reloads slider's values back to normal 
     */
    reloadSlider = () => {
        this.setState({
            currentIndex: 0,
            translateValue: 0
        })
    }

    /**
     * @description Adds an event listener
     * Listens to window's resize
     * Triggers function reloadSlider
     */
    componentDidMount() {
        this.reloadSlider();
        window.addEventListener('resize', this.reloadSlider);
    }

    /**
     * @description Removes event listener
     */
    componentWillUnmount() {
        window.removeEventListener('resize', this.reloadSlider);
    }

    render() {
        return (
            <div className="slider">
                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.55s'
                    }}>
                    {
                        this.state.images.map((image, i) => (
                            <Slide key={i} image={image} title={this.state.title[i]} desc={this.state.desc[i]} translateValue={this.state.translateValue} />
                        ))
                    }
                </div>


                <LeftArrow goToPrevSlide={this.goToPrevSlide} />
                <RightArrow goToNextSlide={this.goToNextSlide} />
            </div>
        )
    }
}

export default Slider;