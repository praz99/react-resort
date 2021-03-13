/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import {
  FaCocktail, FaHiking, FaShuttleVan, FaBeer,
} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: <FaCocktail />,
          title: 'free cocktails',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
        },

        {
          icon: <FaHiking />,
          title: 'endless hiking',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
        },

        {
          icon: <FaShuttleVan />,
          title: 'free shuttle',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
        },

        {
          icon: <FaBeer />,
          title: 'Strongest Beer',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!',
        },
      ],
    };
  }

  render() {
    const { services } = this.state;
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

/* eslint-enable react/no-array-index-key */
