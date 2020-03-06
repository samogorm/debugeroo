import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Logo from './../logo/logo';
import Button from '../button/button';
import Basket from '../basket/basket';
import basketIcon from './../../assets/icons/basket.svg';

import './navbar.scss';

const Navbar = ({ basketItems, updatedBasket }) => {
  const [ isBasketOpen, setIsBasketOpen ] = useState(false);
  const [ basketTotal, setBasketTotal ] = useState(0.00);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Logo />
      </div>
      <div className="navbar__basket-total">
        <Button
          label={ `£${ basketTotal.toFixed(2) }` }
          icon={ basketIcon }
          colour="light"
          action={ () => setIsBasketOpen(!isBasketOpen) }
        />
      </div>
      <div className="navbar__basket">
        <Basket
          items={ basketItems }
          isOpen={ isBasketOpen }
          updateBasketTotal={ value => setBasketTotal(value) }
          updateBasketItems={ value => updatedBasket(value) }
        />
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  basketItems: [],
};

Navbar.propTypes = {
  basketItems: PropTypes.array,
};

export default Navbar;
