import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ label, colour, type, icon, action, data }) => {
  return (
    <button onClick={ action } className={`button button--${ colour } button--${ type }`} basketitem={data}>
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
}

Button.defaultProps = {
  colour: 'primary',
  type: 'normal',
  data: null,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colour: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  action: PropTypes.func,
  data: PropTypes.any,
};

export default Button;
