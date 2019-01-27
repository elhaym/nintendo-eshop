import React, { Component } from 'react';

export class NavLinks extends React.Component {
    render() {

        const width = this.props.screen /** Screen width passed */

        // Declare a list of objects 
        const pages = [{
            icon: null,
            name: "Switch",
            url: "store"
        },
        {
            icon: null,
            name: "3DS XL",
            url: "windows"
        },
        {
            icon: null,
            name: "Amiibo",
            url: "surface"
        },
        {
            icon: null,
            name: "News",
            url: "xbox"
        },
        {
            icon: null,
            name: "Labo",
            url: "office"
        },
        {
            icon: null,
            name: "Store",
            url: "hololens"
        },
        {
            icon: null,
            name: "Support",
            url: "contact-us"
        }
        ];

        /**
         * @description loops through the array "pages" and assign the array of pages to navLinks
         * @param string page - link to be displayed
         * @returns JSX elements - displays list containing every link
         */
        const navLinks = pages.map((page, i) => {
            if (page.icon) {
                return null;
            } else {
                return (
                    <li key={i}>
                        <a href={'./' + page.url}>
                            {page.name}
                        </a>
                    </li>
                )
            }
        }
        );


        if (width < 1280) {
            return (
                <div class="dropdown">
                    <button class="dropbtn"><i className="fas fa-bars"></i></button>
                    <div class="dropdown-content">
                        <ul>
                            {navLinks}
                        </ul>
                    </div>
                </div>
            )
        }
        else {
            return (
                <ul>
                    {navLinks}
                </ul>
            )
        }
    }
}

export default NavLinks;