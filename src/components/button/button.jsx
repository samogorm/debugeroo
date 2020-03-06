import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ label, colour, type, icon, action, data, paddingSize }) => {
  return (
    <button onClick={ action } className={`button button--${ colour } button--${ type } button--padding-${paddingSize}`} basketitem={data}>
      <span className="button__label">
        { icon && (
          <img className={ `${ label !== "" ? 'button__icon-label' : 'button__icon' }`} src={ icon } alt="Icon"/>
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
  paddingSize: 'normal'
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  colour: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  action: PropTypes.func,
  data: PropTypes.any,
  paddingSize: PropTypes.string,
};

export default Button;
