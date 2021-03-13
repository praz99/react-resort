import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export default function FeaturedRooms() {
  const context = useContext(RoomContext);
  const { loading } = context;
  let { featuredRooms: rooms } = context;
  if (rooms) {
    rooms = rooms.map(room => (<Room key={room.id} room={room} />));
  }

  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
