import React from 'react';
import PropTypes from 'prop-types';

import './heading.scss';

const Heading = ({ title, tag: TagName }) => (
  <TagName className="heading">
    { title }
  </TagName>
);

Heading.defaultProps = {
  tag: 'h2',
};

Heading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Heading;
