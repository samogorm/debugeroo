import React from 'react';

import Button from './components/button/button';
import Logo from './components/logo/logo';
import Navbar from './components/navbar/navbar';
import Category from './components/category/category';
import { categories } from './data/data';

import './app.scss';

const App = () => (
  <div className="app">
   <Navbar
      basketTotal="£0.00"
   />

   <div className="app__body">
      <div className="app__categories">
        { categories.map(({ colour, title }, index) => (
          <Category
            key={ `category-${index}` }
            colour={ colour }
            title={ title }
          />
        ))}
      </div>
   </div>
  </div>
);

export default App;
