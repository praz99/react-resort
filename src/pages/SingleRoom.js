/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    const { match } = props;
    this.state = {
      slug: match.params.slug,
      defaultBcg,
    };
  }

  render() {
    const { getRoom } = this.context;
    const { slug } = this.state;
    const room = getRoom(slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }

    const {
      name, description, capacity, size, price, extras, breakfast, pets, images,
    } = room;
    const [mainImg, ...defaultImg] = images;
    const { defaultBcg } = this.state;

    return (
      <>
        <StyledHero img={mainImg || defaultBcg}>
          <Banner title={`${name}`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => <img key={index} src={item} alt={name} />)}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>
                price: $
                {price}
              </h6>
              <h6>
                size:
                {size}
                {' '}
                SQFT
              </h6>
              <h6>
                max capacity:
                {' '}
                {
                  capacity > 1 ? `${capacity} people`
                    : `${capacity} person`
                }
              </h6>
              <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
              <h6>{breakfast && 'free breakfast included'}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>
                -
                {item}
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

SingleRoom.contextType = RoomContext;

SingleRoom.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }).isRequired,
};

/* eslint-enable react/no-array-index-key */
