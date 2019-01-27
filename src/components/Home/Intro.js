import React, { Component } from 'react';
import '../../styles/intro.css';
import Slider from './Slider';
import { Header } from './Header';


export class Intro extends React.Component {
    render() {
        const handleOpen = this.props.handleOpen
        const cart = this.props.cart
        const style = this.props.style
        return (
            <section id="a-fsize">
                <div className="container">
                    <Header handleOpen={handleOpen} cart={cart} style={style} screen={this.props.screen} />
                    <Slider />
                </div>
            </section>
        )
    }
}

