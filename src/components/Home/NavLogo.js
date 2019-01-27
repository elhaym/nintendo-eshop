import React, { Component } from 'react';
import logo from '../../images/logo.png';
import '../../styles/logo.css';

export class NavLogo extends React.Component {
    render() {
        const myLogo = [{
            src: logo,
            alt: "logo",
            title: "logo-playstation",
            width: "120px"
        }];

        const navLogo = myLogo.map((aLogo, i) => {
            return (
                <a key={i} href="./">
                    <img src={aLogo.src}
                        alt={aLogo.alt}
                        title={aLogo.title}
                        width={aLogo.width}
                    />
                </a>
            )
        }
        );

        return (
            <div className="logo">
                {navLogo}
            </div>);
    }
}

export default NavLogo;