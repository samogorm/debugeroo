import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ label, colour, type, icon, action }) => (
  <button onClick={ action } className={`button button--${ colour } button--${ type }`}>
    <span className="button__label">
      { icon && (
        <span className="button__icon">
          { icon }
        </span>
      )}
      { label }
    </span>
  </button>
);

Button.defaultProps = {
  colour: 'primary',
  type: 'normal'
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colour: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
