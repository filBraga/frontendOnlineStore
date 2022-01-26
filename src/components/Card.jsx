import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { id, titulo, foto, price, cartCallback } = this.props;
    // console.log(titulo.join(''));
    // const test = titulo;
    // console.log(test.replaceAll(' ', '_'));
    // test.replaceAll(' ', '_');

    return (
      <Link to={ `/productDetails/:${titulo}` } data-testid="product-detail-link">
        <div className="cardClass" data-testid="product">
          <h3>
            {titulo}
          </h3>
          <img
            src={ foto }
            alt="Alternative"
            data-testid=""
            width="150px"
          />
          <h4>
            {price}
          </h4>
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => { cartCallback(id, titulo, price); } }
          >
            Adicionar no Carrinho
          </button>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  foto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  cartCallback: PropTypes.func.isRequired,
};

export default Card;
