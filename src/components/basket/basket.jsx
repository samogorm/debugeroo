import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Heading from '../heading/heading';
import Button from '../button/button';
import binIcon from './../../assets/icons/bin.svg';

import './basket.scss';

const Basket = ({ items, isOpen, updateBasketTotal }) => {
  const [ basketItems, setBasketItems] = useState([]);

  useEffect(() => setBasketItems(formatItems()), [items]);
  useEffect(() => updateBasketTotal(calculateBasketTotal()), [basketItems]);

  const calculateBasketTotal = () => basketItems.reduce((res, acc) => res + acc.sum, 0.00);

  const formatItems = () => {
    const groupItems = items.reduce((res, acc) => {
      res[acc.id] = [...res[acc.id] || [], acc];
      return res;
    }, {});

    let formattedItems = [];
    const getEntries = () => Object.entries(groupItems).map(groupItem => {
      const sum = groupItem[1].reduce((res, acc) => res + Number(acc.price), 0.00);
      
      formattedItems.push({
        id: groupItem[1][0].id,
        title: groupItem[1][0].title,
        quantity: groupItem[1].length,
        sum
      });
    });
    getEntries();

    return formattedItems;
  };

  const removeItem = id => {
    const updatedBasket = basketItems.filter(item => item.id !== Number(id) );
    setBasketItems(updatedBasket);
  };

  const displayNothingInBasket = () => (
    <p className="basket__no-items">Nothing in your basket :(</p>
  );

  const displayBasketItems = () => {
    return basketItems.map((item, index) => (
      <div className="basket__item" key={`basket-item-${index}`}>
       <div className="basket__left">
        <h4 className="basket__item-title">
            { item.title } 
            <span className="basket__item-quantity">x{ item.quantity }</span>
          </h4>
          <Heading
            tag="h3"
            title={ `£${ item.sum }` }
          />
       </div>
       <div className="basket__right">
         <Button
          label=""
          colour="danger"
          action={ e => removeItem(e.currentTarget.getAttribute('basketitem')) }
          data={ item.id }
          icon={ binIcon }
          paddingSize="small"
         />
       </div>
      </div>
    ));
  }
  
  return (
    <div className={`basket ${ isOpen ? 'basket--open' : 'basket--closed' }`}>
      <div className="basket__title">
        <Heading
          tag="h2"
          title="Your Basket"
        />
      </div>
      <div className="basket__items">
        { basketItems.length ? displayBasketItems() : displayNothingInBasket() }
      </div>

      { basketItems.length &&
        <div className="basket__footer">
        <Button
            label="Checkout"
            type="block"
            action={ () => console.log('Checkout...') }
        />
        </div>
      }
    </div>
  );
};

Basket.defaultProps = {
  items: [],
};

Basket.propTypes = {
  items: PropTypes.array
};

export default Basket;
