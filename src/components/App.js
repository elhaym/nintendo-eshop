import React, { Component } from 'react';
import { Intro } from './Home/Intro';
import { News } from './Home/News';
import { TopDivider } from './Home/TopDivider';
import { MiddleDivider } from './Home/MiddleDivider';
import { Trailer } from './Home/Trailer/Trailer';
import { Features } from './Home/Features';
import { Products } from './layout/Products';
import { Footer } from './Home/Footer';
import { CartPopup } from './layout/CartPopup';

import './App.css';
import '../styles/fonts.css';
import '../styles/main.css';
import '../styles/video-react-edition.css';
import '../styles/cart.css';
import '../styles/responsive.cart.css';
import '../styles/responsive.intro.css';
import '../../node_modules/video-react/dist/video-react.css';

import data from './layout/Products.res/data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isEnabled: false,
      isDisplayed: false,
      products: data,
      cart: [],
      screenWidth: window.innerWidth
    }
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  displayTrailer = () => {
    this.setState({
      isOpen: true
    });
  }
  closeTrailer = () => {
    this.setState({
      isOpen: false
    });
  }

  displayCart = () => {
    this.setState({
      isDisplayed: true
    });
  }
  closeCart = () => {
    this.setState({
      isDisplayed: false
    });
  }

  handleAddToCart(product) {
    /** Test if the product is already in the shopping cart */
    const cartItem = this.state.cart.find(x => x.id === product.id)
    /** Verify if there's still products in stock */
    if (product.stock > 0) {
      /** Test if the product isn't already in the shopping cart
       *  Add the product if it's a new one
        */
      if (!cartItem) {
        /** Update the cart by pushing the new product */
        product.qty += 1 /** product's quantity is updated to 1 */
        this.setState({
          cart: [...this.state.cart, product]
        })
        product.stock -= 1 /** Product's stocks are updated */
      } else { /** if the product already exists in the cart, its quantity and the product's stocks are updated */
        this.setState({
          cart: [...this.state.cart]
        })
        product.qty += 1
        product.stock -= 1
      }
    }
    /** if there's no more stock, an alert message is displayed to inform the user */
    else {
      this.setState({
        isEnabled: true
      })
      window.alert('Le produit ' + product.title + ' sur ' + product.cat + ' n\'est malheureusement plus en stock. De nouveaux approvisionnements seront bientôt disponibles sur la boutique !')
    }
  }
  componentWillMount() {
    this.setState({ screenWidth: window.innerWidth })
  }

  render() {
    return (
      <div className="App">
        <main>
          <Intro handleOpen={this.displayCart} cart={this.state.cart} style="c-cart-amt" screen={this.state.screenWidth} />
          <CartPopup cart={this.state.cart} isDisplayed={this.state.isDisplayed} handleClose={this.closeCart} />
          <TopDivider screen={this.state.screenWidth} />
          <News />
          <MiddleDivider displayTrailer={this.displayTrailer} />
          <Trailer closeTrailer={this.closeTrailer} isOpen={this.state.isOpen} />
          <Features />
          <Products
            products={this.state.products}
            handleAddToCart={this.handleAddToCart}
            enabled={this.state.isEnabled}
          />
          <Footer />
        </main>
      </div>

    );
  }
}

export default App;
