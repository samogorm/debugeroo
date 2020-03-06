import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';

import './menu_item.scss';
import Button from '../button/button';


const MenuItem = ({ id, title, text, price, image, updateBasketItems }) => (
  <div className="menu-item">
    <div className="menu-item__image" style={{ backgroundImage: `url(${ image })`}}></div>
    <div className="menu-item__body">
      <Heading
        tag="h4"
        title={ title }
      />
      <p className="menu-item__text">
        { text }
      </p>
    </div>
    <div className="menu-item__footer">
      <span className="menu-item__price">
        £{ price }
      </span>
      <Button
        label="Add"
        action={ () => updateBasketItems({ id, title, price }) }
      />
    </div>
  </div>
);

MenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default MenuItem;
