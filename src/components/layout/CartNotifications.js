import React from 'react';

export class CartNotifications extends React.Component {
    render() {
        if (this.props.cart.qty > 99) {
            return (
                <div className={this.props.style}>
                    <p>99</p>
                </div>
            )
        }
        else {
            return (
                <div className={this.props.style}>
                    <p>{this.props.cart.length}</p>
                </div>
            )
        }

    }
}