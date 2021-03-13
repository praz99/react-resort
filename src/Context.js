/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import items from './data';

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      sortedRooms: [],
      featuredRoom: [],
      loading: true,
      type: 'all',
      capacity: 1,
      price: 0,
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      breakfast: false,
      pets: false,
    };
  }

  componentDidMount() {
    const rooms = this.formatData(items);
    const featuredRooms = rooms.filter(room => room.featured === true);
    const maxPrice = Math.max(...rooms.map(item => item.price));
    const maxSize = Math.max(...rooms.map(item => item.size));
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize,
    });
  }

  getRoom = slug => {
    const { rooms } = this.state;
    const tempRooms = [...rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = event.target;
    this.setState({
      [name]: value,
    }, this.filterRooms);
  };

  filterRooms = () => {
    const {
      rooms, type, capacity: capacity1, price, minSize, maxSize, breakfast, pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];

    // transform value
    const capacity = parseInt(capacity1, 10);

    // filter by type
    if (type !== 'all') {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }

    // change state
    this.setState({
      sortedRooms: tempRooms,
    });
  }

  formatData = items => {
    const tempItems = items.map(item => {
      const { id } = item.sys;
      const images = item.fields.images.map(image => image.fields.file.url);
      const room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  render() {
    const { children } = this.props;
    return (
      <RoomContext.Provider value={{
        ...this.state,
        getRoom: this.getRoom,
        handleChange: this.handleChange,
      }}
      >
        {children}
      </RoomContext.Provider>
    );
  }
}

RoomProvider.propTypes = {
  children: PropTypes.node,
};

RoomProvider.defaultProps = {
  children: '',
};

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

export { RoomProvider, RoomConsumer, RoomContext };
/* eslint-disable react/jsx-props-no-spreading */
