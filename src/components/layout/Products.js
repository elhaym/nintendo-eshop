import React from 'react';

import ProductsItem from './ProductsItem';
import '../../styles/buttons.css';
import '../../styles/products.css';
import '../../styles/responsive.products.css';

export class Products extends React.Component {
    constructor(props) {
        super(props);
        this.renderProductsItem = this.renderProductsItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(product) {
        this.props.handleAddToCart(product)
    }
    renderProductsItem(product, i) {
        return (
            <ProductsItem
                key={"product-" + i}
                index={i}
                product={product}
                handleClick={this.handleClick}
                enabled={this.props.enabled}
            />
        )
    }
    render() {
        return (
            <section id="d-fsize">
                <div className="container">
                    <div className="products-list">
                        <div className="products-list-wrapper">
                            <h1>Les expériences phares sur Nintendo Switch</h1>
                            {this.props.products.map(this.renderProductsItem)}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}