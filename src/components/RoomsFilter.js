/* eslint-disable react/no-array-index-key */

import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { RoomContext } from '../Context';
import Title from './Title';

// get all unique values
const getUnique = (items, value) => [...new Set(items.map(item => item[value]))];

export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets,
  } = context;

  // get unique types
  let types = getUnique(rooms, 'type');

  // add all
  types = ['all', ...types];

  // map to jsx
  types = types.map((item, index) => <option value={item} key={index}>{item}</option>);

  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => <option key={index} value={item}>{item}</option>);
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">
            room type
            <select name="type" id="type" value={type} className="from-control" onChange={handleChange}>
              {types}
            </select>
          </label>
        </div>
        {/* end of select type */}

        {/* guest */}
        <div className="form-group">
          <label htmlFor="capacity">
            guests
            <select name="capacity" id="capacity" value={capacity} className="from-control" onChange={handleChange}>
              {people}
            </select>
          </label>
        </div>
        {/* end of guest */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">
            room price $
            {price}
            <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
          </label>
        </div>
        {/* end of room price */}
        {/* size */}
        <div className="form-group">
          <label htmlFor="size">
            room size
            <div className="size-inputs">
              <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
              <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
            </div>
          </label>
        </div>
        {/* end of size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <label htmlFor="breakfast">
              breakfast
              <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
            </label>
          </div>
          <div className="single-extra">
            <label htmlFor="pets">
              pets
              <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
            </label>
          </div>
        </div>
        {/* end of extras */}
      </form>
    </section>
  );
}

RoomFilter.propTypes = {
  rooms: PropTypes.objectOf(PropTypes.object).isRequired,
};

/* eslint-enable react/no-array-index-key */
