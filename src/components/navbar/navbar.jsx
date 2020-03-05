import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Logo from './../logo/logo';
import Button from '../button/button';

import './navbar.scss';

const Navbar = ({ basketTotal }) => {
  const [ isBasketOpen, setIsBasketOpen ] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Logo />
      </div>
      <div className="navbar__basket">
        <Button
          label={ basketTotal }
          icon=""
          colour="light"
          action={ () => console.log("Basket loading") }
        />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  basketTotal: PropTypes.string.isRequired,
};

export default Navbar;
