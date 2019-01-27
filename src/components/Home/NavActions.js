import React, { Component } from 'react';
import "../../styles/actions.css";
import { CartNotifications } from '../layout/CartNotifications';

export class NavActions extends React.Component {
    render() {
        const actions = [
            {
                icon: 'far fa-user',
                name: 'Login',
                url: 'login'
            },
            {
                icon: 'fas fa-shopping-basket',
                name: 'Basket',
                url: 'buy'
            }
        ];
        const navActions = actions.map((action, i) => {
            for (i = 0; i < actions.length; i++) {
                if (action.name === "Basket") {
                    return (
                        <li key={action.name.toLowerCase() + "-" + i}>
                            <CartNotifications cart={this.props.cart} style={this.props.style} />
                            <a onClick={this.props.handleOpen}><i className={action.icon} ></i></a>
                        </li>
                    )
                } else {
                    return (
                        <li key={action.name.toLowerCase() + "-" + i}>
                            <a><i className={action.icon}></i></a>
                        </li>
                    )
                }
            }
        }
        );

        return (
            <div className="action" >
                <ul>{navActions}</ul>
            </div>
        )
    }
}

export default NavActions;