import React from 'react';

export default function Hero({childern, hero}) {
  return (
    <header className={hero}>
      {childern}
    </header>
  );
};
