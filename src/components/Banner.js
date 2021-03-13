import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  children: PropTypes.node,
};

Banner.defaultProps = {
  title: '',
  subtitle: '',
  children: '',
};
