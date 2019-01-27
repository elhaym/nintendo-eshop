import React from 'react';
import NavLinks from './NavLinks';
import '../../styles/nav.css';
import '../../styles/responsive.nav.css';

export class NavBar extends React.Component {
    render() {
        return (
            <nav>
                <NavLinks screen={this.props.screen} />
            </nav>
        )
    }
}
export default NavBar;