import React from 'react';

import image from './../../assets/brand/logo.svg';
import './logo.scss';

const Logo = () => (
  <img
    src={ image }
    alt="Debugeroo logo"
    className="logo"
  />
);

export default Logo;
