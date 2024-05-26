import React, { useState, useEffect } from 'react';
import { Room } from '../Room';

export const RoomList = ({ onSelect }) => {
  const [room, setRoom] = useState([]);

  // let rooms = [];

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/rooms');
      const data = await response.json();
      setRoom(data.data);
      // console.log(data.data);
    };
    fetchRooms();
  }, []);

  return (
    <section className="dark">
      <div className="container">
        <h2>Heading</h2>
        <p>Quas odio quidem, enim nihil unde quia tem poribus vitae in ab.</p>
        <div className="cards-row">
          {room &&
            room.map((selectedroom, index) => (
              <Room
                key={index}
                onSelect={onSelect}
                description={selectedroom.description}
                name={selectedroom.name}
                price={selectedroom.price}
                img={selectedroom.image}
              />
            ))}
        </div>
      </div>
    </section>
  );
};
