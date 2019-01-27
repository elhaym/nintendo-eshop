import React from 'react';
import Button from '../common/Button';

const ProductsItem = (props) => {
    const product = props.product
    const e= props.e
    const itemStyle = {
        backgroundImage: `url(${require('../../images/' + product.image)})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }
    return (
        <div className={"l-products-item item-" + props.index}>
            <div className="item-img" style={itemStyle}>
                <span></span>
            </div>
            <h5>{product.cat}</h5>
            <h4>{product.title}</h4>
            <p className="price">{product.price + "€"}</p>
            <p className="stock">{"En stock : " + product.stock}</p>
            <Button style="btn-add-cart" text="Ajouter au panier" handleClick={props.handleClick.bind(this, product, e)} />
        </div>
    )


}

export default ProductsItem;