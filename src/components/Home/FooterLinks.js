import React from 'react';

export class FooterLinks extends React.Component {
    render() {
        const links = [{
            text: 'A propos',
            href: 'about'
        },
        {
            text: 'Assistance',
            href: 'support'
        },
        {
            text: 'Accessibilité LSF',
            href: 'lsf-access'
        },
        {
            text: 'Conférence de presse',
            href: 'press'
        },
        {
            text: 'Conditions d\'utilisation du site Web',
            href: 'terms-of-use'
        },
        {
            text: 'Mentions juridiques',
            href: 'legal-mentions'
        },
        {
            text: 'Plan du site',
            href: 'sitemap'
        },
        {
            text: 'Emplois',
            href: 'careers'
        }
        ]
        const listStyle={
            border: 'none'
        }
        const footerLinks = links.map((link, i) => {
            if(i<(links.length-1)){
                return (
                    <li key={i}
                        className={"li-item-" + JSON.stringify(i)}
                    >
                        <a href={"./" + link.href}>{link.text}</a>
                    </li>
                )
                } else {
                    return (
                        <li key={i}
                            className={"li-item-" + JSON.stringify(i)}
                            style={listStyle}
                        >
                            <a href={"./" + link.href}>{link.text}</a>
                        </li>
                    )
                }
            
        })
        return (
            <div className="footer-links">
                <ul>{footerLinks}</ul>
            </div>
        )
    }
}