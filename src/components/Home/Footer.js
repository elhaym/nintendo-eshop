import React from 'react';
import { FooterLinks } from './FooterLinks';
import FooterItems from './FooterItems';
import logo from '../../images/logo.png';

import '../../styles/footer.css';
import '../../styles/responsive.footer.css';




export class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../../images/amiibo-item-bg.jpg'),
                require('../../images/splatoon2-item-bg.jpg'),
                require('../../images/dbfz-item-bg.jpg')
            ],
            href: [
                'get-amiibo',
                'splatoon-2',
                'db-fighterz'
            ],
            desc: [
                'Découvrir la collection d\'Amiibos des héros Nintendo',
                'Marquez et défendez votre territoire dans Splatoon 2',
                'Faites exploser votre ki dans Dragon Ball FighterZ'            ],
        }

    }
    render() {

        return (
            <footer>
                <div className="footer-wrapper">
                {
                this.state.images.map((image, i) => (
                    <FooterItems key={i} image={image} href={this.state.href[i]} desc={this.state.desc[i]} />
                ))
                }
                    <div className="footer-nav">
                        <img src={logo} />
                        <FooterLinks />
                    </div>
                    <p className="copyright-txt">Copyright ©2019 Nintendo Entertainment Japan. Tout le contenu, les titres de jeux, marques, marques commerciales, graphismes et imagerie connexe sont la propriété intellectuelle de leurs détenteurs respectifs. Tous droits réservés. <a href="">Plus d'infos</a>
                    </p>
                </div>
            </footer>
        )
    }

}