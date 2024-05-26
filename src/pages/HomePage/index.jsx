import { useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { RoomDetail } from '../components/OrderDetail';
import { RoomList } from '../components/RoomsList';
import './style.css';

export const HomePage = () => {
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDesctiption] = useState('');
  const [roomPrice, setRoomPrice] = useState(450);
  const [roomImg, setRoomImg] = useState(null);

  const roomSelect = (name, description, price, img) => {
    setRoomName(name);
    setRoomDesctiption(description);
    setRoomPrice(price);
    setRoomImg(img);
  };

  return (
    <>
      <Header />
      <RoomList onSelect={roomSelect} />
      <RoomDetail
        name={roomName}
        description={roomDescription}
        price={roomPrice}
        image={roomImg}
      />
      <Footer />
    </>
  );
};
