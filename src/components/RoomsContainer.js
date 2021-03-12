import React from 'react';
import { withRoomConsumer } from '../Context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from '../components/Loading';

function RoomsContainer({context}) {
  const {loading, sortedRooms, rooms} = context;
  if(loading) {
    return <Loading />
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  )
}

export default withRoomConsumer(RoomsContainer);

// import React from 'react';
// import { RoomConsumer } from '../Context';
// import RoomsFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import Loading from '../components/Loading';

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {
//         (value) => {
//           const {loading, sortedRooms, rooms} = value
//           if(loading) {
//             return <Loading />
//           }
//           return (
//             <div>
//               Hello from rooms container.
//               <RoomsFilter rooms={rooms} />
//               <RoomsList rooms={sortedRooms} />
//             </div>
//           )
//         }
//       }
//     </RoomConsumer>
//   );
// };
