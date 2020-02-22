import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ label, type, icon, action }) => (
  <button onClick={ action } className={`button button--${type}`}>
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
  type: 'primary',
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  icon: PropTypes.string,
  action: PropTypes.func,
};

export default Button;
