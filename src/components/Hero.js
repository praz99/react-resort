import React from 'react';
import PropTypes from 'prop-types';

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      {children}
    </header>
  );
}

Hero.propTypes = {
  children: PropTypes.node,
  hero: PropTypes.string,
};

Hero.defaultProps = {
  children: '',
  hero: 'defaultHero',
};
