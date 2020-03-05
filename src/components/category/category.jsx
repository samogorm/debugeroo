import React from 'react';
import PropTypes from 'prop-types';

import './category.scss';

const Category = ({ colour, title, url }) => (
  <a href={ url } className={`category category--${ colour }`}>
    { title }
  </a>
);

Category.defaultProps = {
  colour: 'aqua',
  url: '#',
};

Category.propTypes = {
  colour: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
};

export default Category;
