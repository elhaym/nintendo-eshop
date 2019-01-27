import React, { Component } from 'react';
import NavBar from './NavBar';
import NavLogo from './NavLogo';
import NavActions from './NavActions';


export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             /** Some links have to change depending on state like token from logging in */ 
            
        };
    }
    render() {
        return (
                <header>
                    <NavLogo />
                    <NavBar screen={this.props.screen} />
                    <NavActions handleOpen={this.props.handleOpen} cart={this.props.cart} style={this.props.style} />
                </header>
        )
    }
}
