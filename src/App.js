import React, { useState } from 'react';

import Navbar from './components/navbar/navbar';
import Category from './components/category/category';
import Heading from './components/heading/heading';
import MenuItem from './components/menu_item/menu_item';
import { categories, featuredItems } from './data/data';

import './app.scss';

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = item => setBasketItems([...basketItems, item]);

  return (
    <div className="app">
     <Navbar
        basketItems={ basketItems }
        updatedBasket={ items => {
          const updatedItems = [];
          items.forEach(item => {
            const updateItem = {
              id: item.id,
              title: item.title,
              price: item.sum,
            };

            updatedItems.push(updateItem);
          });

          setBasketItems(updatedItems);
        }}
     />
  
     <div className="app__body">
      <section className="app__categories">
        <Heading
          title="Categories"
        />
        <div className="app__category-list">
          { categories.map(({ colour, title }, index) => (
            <Category
              key={ `category-${index}` }
              colour={ colour }
              title={ title }
            />
          ))}
        </div>
      </section>
      <section className="app__featured">
        <Heading
          title="Featured"
        />
        <div className="app__featured-items">
          { featuredItems.map(({ id, title, text, price, image }) => (
            <MenuItem
              key={ `featured-${ id }`}
              id={ id }
              title={ title }
              text={ text }
              price={ price }
              image={ image }
              updateBasketItems={ addToBasket }
            />
          ))}
        </div>
      </section>
     </div>
    </div>
  );
};

export default App;
