import React from 'react';
import Button from '../common/Button';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export class CartPopup extends React.Component {
    render() {
        const cart = this.props.cart
        let currentPrice = 0
        let total = 0
        let cartItem
        if (cart.length === 0) {
            cartItem = <tr><td align="center" colSpan="5" className="cart-empty">Aucun article...</td></tr>
        } else {
            cartItem = cart.map((item, i) => {
                currentPrice = Number((item.price * item.qty) + currentPrice)
                total = currentPrice
                return (
                    <tr className={"cart-item-" + i}>
                        <td className="item-id">{item.id}</td>
                        <td className="item-title">{item.title + " - " + item.cat}</td>
                        <td className="item-qty">{"x" + item.qty}</td>
                        <td className="item-price">{Number(item.price * item.qty).toFixed(2) + "€"}</td>
                        {/** "Ref: " + item.id + " " + item.title + " " + item.cat + " x" + item.qty + " " + Number(item.price * item.qty).toFixed(2) + "€" */}
                    </tr>
                )
            })
        }

        if (!this.props.isDisplayed) {
            return null;
        }
        if (this.props.isDisplayed) {
            return (
                <CSSTransitionGroup
                    transitionName="fade"
                    transitionAppear={false}
                    transitionEnter={true}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                    transitionLeave={true}
                >
                    <div className="cart-home">
                        <div className="cart-home-wrapper">
                            <h4>Votre commande</h4>
                            <div className="cart-product-list">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Ref.</th>
                                            <th>Libellé</th>
                                            <th>Qt.</th>
                                            <th>Prix</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItem}
                                        <tr>
                                            <td align="right" colSpan="3"><strong>Total: </strong></td>
                                            <td align="left" colSpan="2">{Number(total).toFixed(2) + "€"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Button style="l-btn-checkout" text="Procéder au paiement" />
                                <span onClick={this.props.handleClose}>
                                    <i className="fas fa-times"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </CSSTransitionGroup>
            )
        }
    }
}