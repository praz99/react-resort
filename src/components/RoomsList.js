import React from 'react';
import PropTypes from 'prop-types';
import Room from './Room';

export default function RoomList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters.</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {
          rooms.map(item => <Room key={item.id} room={item} />)
        }
      </div>
    </section>
  );
}

RoomList.propTypes = {
  rooms: PropTypes.objectOf(PropTypes.object).isRequired,
};
